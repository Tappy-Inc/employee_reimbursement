import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, string | number | bigint, string | number | bigint>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | null | number | string;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Numeric = ColumnType<string, string | number, string | number>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Departments {
  department_id: Generated<Int8>;
  department_name: string | null;
  created_at: Generated<Timestamp | null>;
}

export interface ExpenseTypes {
  expense_type_id: Generated<Int8>;
  expense_type_name: string | null;
  created_at: Generated<Timestamp | null>;
}

export interface ReimbursementRequests {
  request_id: Generated<Int8>;
  reference_no: string | null;
  requestor_id: Int8 | null;
  amount: Numeric;
  attachment: string | null;
  attachment_mask_name: string | null;
  expense_type_id: Int8 | null;
  request_status_id: Int8 | null;
  description: string | null;
  date_approve: Timestamp | null;
  num_of_approvers: number | null;
  next_approver_id: Int8 | null;
  created_at: Generated<Timestamp | null>;
}

export interface RequestApprovers {
  request_approver_id: Generated<Int8>;
  reimbursement_request_id: Int8 | null;
  user_id: Int8 | null;
  approver_order: number | null;
  action_performed_id: Int8 | null;
  remarks: string | null;
  audit_trail: Json[] | null;
  updated_at: Timestamp | null;
  created_at: Generated<Timestamp | null>;
}

export interface RequestReferenceNo {
  reference_no_id: Generated<Int8>;
  reimbursement_request_id: Int8 | null;
  year: string | null;
  preffix: Generated<string | null>;
  created_at: Generated<Timestamp | null>;
}

export interface RequestStatus {
  request_status_id: Generated<Int8>;
  request_status_name: string | null;
  created_at: Generated<Timestamp | null>;
}

export interface Users {
  user_id: Generated<Int8>;
  propelauth_user_id: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  created_at: Generated<Timestamp | null>;
  is_reimbursement_approver: Generated<boolean | null>;
  department_id: Int8 | null;
}

export interface DB {
  departments: Departments;
  expense_types: ExpenseTypes;
  reimbursement_requests: ReimbursementRequests;
  request_approvers: RequestApprovers;
  request_reference_no: RequestReferenceNo;
  request_status: RequestStatus;
  users: Users;
}
