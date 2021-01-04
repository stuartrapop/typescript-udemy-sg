import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

import { WinsAnalysis } from './analyzers/WinsAnalysis';

import { ConsoleReport } from './outputTargets/ConsoleReport';

import { HtmlReport } from './outputTargets/HtmlReport';

import { Summary } from './Summary';

const cvsReader = new CsvFileReader('football.csv');
const reader = new MatchReader(cvsReader);
reader.load();
const matches = reader.matches; 


const consoleSummary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
consoleSummary.buildAndPrintReport(matches);

const htmlSummary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
htmlSummary.buildAndPrintReport(matches);




