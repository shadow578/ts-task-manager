import { ipcMain } from 'electron';
import { ProcessManagementBinding } from './binding/ProcessManagementBinding';

let processManagement: ProcessManagementBinding;

export function init() {
  // initialize binding
  processManagement = new ProcessManagementBinding();

  // add ipc handlers
  ipcMain.handle('get-all-processes', async () => {
    return await processManagement.getAllProcesses();
  });
  ipcMain.handle('get-processes', async (_event, pids: number[]) => {
    return await processManagement.getProcessess(pids);
  });
  ipcMain.handle('kill-process', async (_event, pid: number) => {
    return await processManagement.killProcess(pid);
  });
}

export function dispose() {
  // dispose binding
  processManagement.shell.dispose();
}
