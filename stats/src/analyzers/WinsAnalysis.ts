import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';

import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer{
  constructor(public teamName: string) {}

  run (matches: MatchData[]): string {

      let wins = 0;
      for (let match of matches ) {
        if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
          wins += 1;
        } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
          wins += 1;
        }
      }

      return `Team ${this.teamName} has ${wins} wins`;
  }

}