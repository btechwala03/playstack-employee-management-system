"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const constants_1 = require("../utils/constants");
const AppError_1 = require("../utils/AppError");
const EmployeeSchema = new mongoose_1.Schema({
    employeeId: { type: String, required: true, unique: true, index: true },
    firstName: { type: String, required: true, index: true },
    lastName: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    department: { type: String, required: true, index: true },
    designation: { type: String, required: true },
    salary: { type: Number, required: true, min: 0 },
    joiningDate: { type: Date, required: true },
    status: { type: String, enum: Object.values(constants_1.STATUS), default: constants_1.STATUS.ACTIVE },
    role: { type: String, enum: Object.values(constants_1.ROLES), default: constants_1.ROLES.EMPLOYEE },
    reportingManager: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee', default: null },
    profileImage: { type: String, default: null },
    isDeleted: { type: Boolean, default: false, index: true },
}, {
    timestamps: true,
});
// Prevent circular reporting
EmployeeSchema.pre('save', async function () {
    if (!this.isModified('reportingManager') || !this.reportingManager) {
        return;
    }
    // Prevent self-reporting
    if (this.reportingManager.equals(this._id)) {
        throw new AppError_1.AppError('An employee cannot report to themselves.', 400);
    }
    // Prevent circular reporting (Traverse up the tree)
    let currentManagerId = this.reportingManager;
    const visited = new Set();
    while (currentManagerId) {
        if (visited.has(currentManagerId.toString())) {
            throw new AppError_1.AppError('Circular reporting loop detected.', 400);
        }
        visited.add(currentManagerId.toString());
        if (currentManagerId.equals(this._id)) {
            throw new AppError_1.AppError('Circular reporting loop detected. Subordinate cannot be a manager to their own manager.', 400);
        }
        const manager = await mongoose_1.default.model('Employee').findById(currentManagerId).select('reportingManager');
        if (!manager)
            break;
        currentManagerId = manager.reportingManager;
    }
});
exports.Employee = mongoose_1.default.model('Employee', EmployeeSchema);
