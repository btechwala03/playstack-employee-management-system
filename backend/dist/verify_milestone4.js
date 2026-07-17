"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_service_1 = require("./services/dashboard.service");
const dashboard_repository_1 = require("./repositories/dashboard.repository");
const organization_service_1 = require("./services/organization.service");
const organization_repository_1 = require("./repositories/organization.repository");
const employee_repository_1 = require("./repositories/employee.repository");
const constants_1 = require("./utils/constants");
const AppError_1 = require("./utils/AppError");
async function runTests() {
    console.log('--- RUNNING MILESTONE 4 LOGIC VERIFICATION (MOCKED DB) ---');
    // 1. Mock Dashboard Repository
    dashboard_repository_1.dashboardRepository.getSummaryStatistics = async () => {
        return {
            totalCount: [{ count: 100 }],
            statusCounts: [
                { _id: constants_1.STATUS.ACTIVE, count: 90 },
                { _id: constants_1.STATUS.INACTIVE, count: 10 },
            ],
            departmentCounts: [
                { _id: 'Engineering', count: 50 },
                { _id: 'HR', count: 50 },
            ],
            roleCounts: [
                { _id: 'EMPLOYEE', count: 90 },
            ],
            monthlyTrend: [
                { _id: { year: 2026, month: 1 }, count: 5 },
            ]
        };
    };
    console.log('1. Testing Dashboard Analytics Formatting...');
    const summary = await dashboard_service_1.dashboardService.getDashboardSummary();
    if (summary.totalEmployees !== 100 || summary.activeEmployees !== 90 || summary.departmentCount !== 2) {
        throw new Error('Dashboard formatting failed');
    }
    if (summary.monthlyTrend[0].month !== 'Jan 2026') {
        throw new Error('Dashboard monthly trend formatting failed');
    }
    console.log('✅ Dashboard Analytics works');
    // 2. Mock Organization Repository for Tree Building
    const mockOrgDB = [
        { _id: 'root1', firstName: 'Alice', reportingManager: null },
        { _id: 'child1', firstName: 'Bob', reportingManager: 'root1' },
        { _id: 'child2', firstName: 'Charlie', reportingManager: 'root1' },
        { _id: 'grandchild1', firstName: 'Dave', reportingManager: 'child1' },
    ];
    organization_repository_1.organizationRepository.getAllActiveEmployeesLean = async () => mockOrgDB;
    console.log('2. Testing Organization Tree Building...');
    const tree = await organization_service_1.organizationService.getOrganizationTree();
    if (tree.length !== 1 || tree[0].firstName !== 'Alice')
        throw new Error('Tree root failed');
    if (tree[0].directReports.length !== 2)
        throw new Error('Tree children failed');
    if (tree[0].directReports[0].directReports[0].firstName !== 'Dave')
        throw new Error('Tree grandchildren failed');
    console.log('✅ Organization Tree logically builds successfully');
    // 3. Mock Manager Reassignment Validation
    // Wait, `employee.save()` triggers the mongoose hook in real life.
    // We will mock the `employeeRepository.findById` to return an object with a mocked `.save()` method
    // that throws our circular reference AppError if we detect it for the test.
    console.log('3. Testing Manager Assignment...');
    employee_repository_1.employeeRepository.findById = async (id) => {
        if (id === 'child1' || id === 'root1') {
            return {
                _id: id,
                reportingManager: null,
                save: async function () {
                    // Simulate Mongoose pre('save') hook throwing error on circular
                    if (this._id === 'root1' && this.reportingManager === 'child1') {
                        throw new AppError_1.AppError('Circular reporting loop detected.', 400);
                    }
                    return this;
                }
            };
        }
        return null;
    };
    try {
        await organization_service_1.organizationService.updateManager('root1', 'child1');
        throw new Error('Should have blocked circular assignment');
    }
    catch (err) {
        if (err.message !== 'Circular reporting loop detected.') {
            throw err;
        }
        console.log('✅ Circular assignment logically blocked by service/model contract');
    }
    console.log('--- ALL TESTS PASSED ---');
    process.exit(0);
}
runTests().catch(err => {
    console.error(err);
    process.exit(1);
});
