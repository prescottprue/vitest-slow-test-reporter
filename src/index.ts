import type { RunnerTestFile } from 'vitest';
import type { Reporter } from 'vitest/reporters';

export default class VitestSlowTestReporter implements Reporter {
  // TODO: Support options such as number of slowest and outputFile via constructor

  onFinished(files: RunnerTestFile[]): void {
    const sortedBySlowest = files.sort(
      (fileA, fileB) =>
        (fileB.result?.duration || 0) - (fileA.result?.duration || 0),
    );
    const topSlowest = sortedBySlowest.slice(0, 10);
    const topSlowestTable = topSlowest.map((file) => ({
      name: file.name,
      duration: file.result?.duration || 0,
    }));
    console.table(topSlowestTable, ['name', 'duration']);
  }
}
