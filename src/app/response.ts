// Finnan palauttamat tiedot
import { Record } from './record';

export interface Response {
  resultcount: number;
  records: Record[];
  status: string;
}
