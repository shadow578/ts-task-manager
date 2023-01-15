import { ipcMain } from 'electron';
import { ProcessKillBinding } from './binding/ProcessKillBinding';
import { ProcessManagementBinding } from './binding/ProcessManagementBinding';

let processManagement: ProcessManagementBinding;
let processKill: ProcessKillBinding;

export function init() {
  // initialize binding
  processManagement = new ProcessManagementBinding();
  processKill = new ProcessKillBinding();

  // add ipc handlers
  ipcMain.handle('get-all-processes', async () => {
    return await processManagement.getAllProcesses();
  });
  ipcMain.handle('get-processes', async (_event, pids: number[]) => {
    return await processManagement.getProcessess(pids);
  });
  ipcMain.handle('kill-process', async (_event, pid: number) => {
    return await processKill.killProcess(pid);
  });
}

export function dispose() {
  // dispose binding
  processManagement.shell.dispose();
  processKill.shell.dispose();
}
