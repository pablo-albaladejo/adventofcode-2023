export interface CalibrationStrategy {
  transformLine(line: string): string
}