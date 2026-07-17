import mongoose, { Document, Schema } from 'mongoose';
import { ROLES, STATUS, RoleType, StatusType } from '../utils/constants';
import { AppError } from '../utils/AppError';

export interface IEmployee extends Document {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phone: string;
  department: string;
  designation: string;
  salary: number;
  joiningDate: Date;
  status: StatusType;
  role: RoleType;
  reportingManager?: mongoose.Types.ObjectId;
  profileImage?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
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
    status: { type: String, enum: Object.values(STATUS), default: STATUS.ACTIVE },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.EMPLOYEE },
    reportingManager: { type: Schema.Types.ObjectId, ref: 'Employee', default: null },
    profileImage: { type: String, default: null },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  {
    timestamps: true,
  }
);

// Prevent circular reporting
EmployeeSchema.pre('save', async function () {
  if (!this.isModified('reportingManager') || !this.reportingManager) {
    return;
  }

  // Prevent self-reporting
  if (this.reportingManager.equals(this._id)) {
    throw new AppError('An employee cannot report to themselves.', 400);
  }

  // Prevent circular reporting (Traverse up the tree)
  let currentManagerId = this.reportingManager;
  const visited = new Set<string>();

  while (currentManagerId) {
    if (visited.has(currentManagerId.toString())) {
      throw new AppError('Circular reporting loop detected.', 400);
    }
    visited.add(currentManagerId.toString());

    if (currentManagerId.equals(this._id)) {
      throw new AppError('Circular reporting loop detected. Subordinate cannot be a manager to their own manager.', 400);
    }

    const manager = await mongoose.model('Employee').findById(currentManagerId).select('reportingManager');
    if (!manager) break;
    
    currentManagerId = manager.reportingManager;
  }
});

export const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);
