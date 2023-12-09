import { ReportHistory } from '../history';

export interface Strategy {
  solve(histories: ReportHistory[]): number;
}