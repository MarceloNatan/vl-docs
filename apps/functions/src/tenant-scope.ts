/**
 * Mandatory server-side tenant scope. Repositories should compose filters
 * through this helper instead of accepting tenantId from request bodies.
 */
export function tenantFilter<T extends Record<string, unknown>>(tenantId: string, filter: T = {} as T) {
  return { ...filter, tenantId };
}
