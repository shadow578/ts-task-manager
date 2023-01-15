import { contextBridge } from 'electron';
import { ProcessManagementAPI } from './api/ProcessManagementAPI';
import { VersionsAPI } from './api/VersionsAPI';

contextBridge.exposeInMainWorld('processManagement', ProcessManagementAPI);
contextBridge.exposeInMainWorld('versions', VersionsAPI);
