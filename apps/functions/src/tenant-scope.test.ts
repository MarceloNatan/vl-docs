import { describe, expect, it } from 'vitest';
import { tenantFilter } from './tenant-scope';

describe('tenantFilter', () => {
  it('always overwrites a client-provided tenantId', () => {
    expect(tenantFilter('tenant-a', { tenantId: 'tenant-b', status: 'active' })).toEqual({
      tenantId: 'tenant-a', status: 'active',
    });
  });
});
