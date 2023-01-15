import type { ProcessManagementAPI } from './api/ProcessManagementAPI';
import { VersionsAPI } from './api/VersionsAPI';

declare global {
  const processManagement: typeof ProcessManagementAPI;
  const versions: typeof VersionsAPI;
}
