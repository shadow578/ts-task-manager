import { matchNullable, matchObject } from '@shadow578/type-guardian';

/**
 * process information
 */
export interface ProcessInfo {
  /**
   * process id (PID)
   */
  Id: number;

  /**
   * Display name of the process
   */
  ProcessName: string;

  /**
   * process binary path
   */
  Path?: string;

  /**
   * version of the process binary
   */
  FileVersion?: string;

  /**
   * prodcut name
   */
  Product?: string;

  /**
   * product description
   */
  Description?: string;

  /**
   * product publisher name
   */
  Company?: string;

  /**
   * title of the main window
   */
  MainWindowTitle?: string;

  /**
   * cpu usage of the process, seconds
   */
  CPU?: number;

  /**
   * process ram working set
   */
  WorkingSet?: number;

  /**
   * process ram working set
   */
  WorkingSet64?: number;

  /**
   * did the process exit?
   */
  HasExited?: boolean;

  /**
   * is the process responding?
   */
  Responding?: boolean;
}

/**
 * type guard for {@link ProcessInfo}
 */
export const isProcessInfo = matchObject<ProcessInfo>({
  Id: 'number',
  ProcessName: 'string',
  Path: matchNullable('string'),
  FileVersion: matchNullable('string'),
  Product: matchNullable('string'),
  Description: matchNullable('string'),
  Company: matchNullable('string'),
  MainWindowTitle: matchNullable('string'),
  CPU: matchNullable('number'),
  WorkingSet: matchNullable('number'),
  WorkingSet64: matchNullable('number'),
  HasExited: matchNullable('boolean'),
  Responding: matchNullable('boolean'),
});
