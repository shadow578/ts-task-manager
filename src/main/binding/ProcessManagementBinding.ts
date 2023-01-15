/* eslint-disable @typescript-eslint/no-unused-vars */
import { PowerShellBinding, PS, psCall } from '@shadow578/powershell-binding';
import { isProcessInfo, ProcessInfo } from './model/ProcessInfo';
import { isVoid } from '@shadow578/type-guardian/lib/TypeGuards';
import { matchArray } from '@shadow578/type-guardian';

/**
 * powershell bindings for process managament
 */
export class ProcessManagementBinding extends PowerShellBinding {
  /**
   * get all running processes
   *
   * @returns a list of all running processes
   */
  @PS(
    'Get-Process | Select-Object Id, ProcessName, Path, FileVersion, Product, Description, Company, MainWindowTitle, CPU, WorkingSet, WorkingSet64, HasExited, Responding | Write-Output',
    matchArray<ProcessInfo>(isProcessInfo),
  )
  getAllProcesses() {
    return psCall<ProcessInfo[]>();
  }

  /**
   * get a list of processes by PID
   *
   * @param pids the process ids to get
   * @returns a list of all requested processes
   */
  @PS(
    'Get-Process -Id ($pids) | Select-Object Id, ProcessName, Path, FileVersion, Product, Description, Company, MainWindowTitle, CPU, WorkingSet, WorkingSet64, HasExited, Responding | Write-Output',
    matchArray<ProcessInfo>(isProcessInfo),
  )
  getProcessess(pids: number[]) {
    return psCall<ProcessInfo[]>();
  }

  /**
   * kill a process by PID
   *
   * @param pid the process id to kill
   */
  @PS('Stop-Process -Id $params.pid', isVoid, { expandParameters: false })
  killProcess(pid: number) {
    return psCall<void>();
  }
}