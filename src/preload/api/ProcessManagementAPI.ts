import { ipcRenderer } from 'electron';
import type { ProcessInfo } from '../../main/binding/model/ProcessInfo';

export const ProcessManagementAPI = {
  getAllProcesses: async (): Promise<ProcessInfo[]> => {
    return await ipcRenderer.invoke('get-all-processes');
  },

  getProcesses: async (pids: number[]): Promise<ProcessInfo[]> => {
    return await ipcRenderer.invoke('get-processes', pids);
  },

  killProcess: async (pid: number): Promise<void> => {
    return await ipcRenderer.invoke('kill-process', pid);
  },
};
