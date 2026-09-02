export type AppEnvironment = 'dev' | 'hml' | 'prod';
export type UserRole = 'admin' | 'operator' | 'viewer';

export interface TenantContext {
  tenantId: string;
  firebaseUid: string;
  role: UserRole;
}

export interface ApiError {
  error: string;
  correlationId?: string;
}

export interface DocumentRecord {
  tenantId: string;
  storageKey: string;
  originalName: string;
  contentType: string;
  sizeBytes: number;
  sha256: string;
  status: 'pending' | 'quarantined' | 'available' | 'deleted';
}
