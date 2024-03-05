// Finnan palauttamat tiedot
import { Record } from './record';

export interface Response {
  resultCount: number;
  records: Record[];
  status: string;
}
