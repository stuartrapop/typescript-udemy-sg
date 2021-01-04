import {  CsvFileReader } from './CsvFileReader';

import { dateStringToDate } from './utlis';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];


export class MatchReader extends CsvFileReader<MatchData> {

  

  constructor (public fileName : string )   {
    super();
  }

mapRow (row: string[]) : MatchData {
  return [
  dateStringToDate(row[0]),
  row[1],
  row[2],
  parseInt(row[3],10),
  parseInt(row[4],10),
  row[5] as MatchResult,  // 'H', 'A' OR 'D'
  row[6]
  ];
}

}