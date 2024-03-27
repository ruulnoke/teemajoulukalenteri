// Rajapinnat Finnan palauttamiin tietoihin

interface Building {
  value: string;
  translated: string;
}

interface nonPresenterAuthors {
  name: string;
  role: string;
}

interface imageRights {
  copyright: string;
  link: string;
}

interface Record {
  buildings: Building[];
  id: string;
  imageRights: imageRights;
  images: string[];
  nonPresenterAuthors: nonPresenterAuthors[];
  title: string;
  urls: string;
  year: string;
}

export interface Response {
  resultCount: number;
  records: Record[];
  status: string;
}
