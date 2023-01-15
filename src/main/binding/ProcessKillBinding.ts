/* eslint-disable @typescript-eslint/no-unused-vars */
import { PowerShellBinding, PS, psCall } from '@shadow578/powershell-binding';
import { isVoid } from '@shadow578/type-guardian/lib/TypeGuards';

/**
 * powershell bindings for process killing
 */
export class ProcessKillBinding extends PowerShellBinding {
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
