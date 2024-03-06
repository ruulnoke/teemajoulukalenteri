// kalenteriluukun interface

export interface Door {
  status: 'open' | 'closed';
  number: string;
  image: string;
  title: string;
  year: string;
  collection?: string;
  organization: string;
  authorName: string;
  authorRole: string;
}
