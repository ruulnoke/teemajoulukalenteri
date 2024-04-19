// Rajapinnat Finnan palauttamiin tietoihin

interface Building {
  value: string;
  translated: string;
}

interface NonPresenterAuthors {
  name: string;
  role: string;
}

interface ImageRights {
  copyright: string;
  link: string;
}

interface Record {
  buildings: Building[];
  id: string;
  imageRights: ImageRights;
  images: string[];
  nonPresenterAuthors: NonPresenterAuthors[];
  title: string;
  urls: string;
  year: string;
}

export interface Response {
  resultCount: number;
  records: Record[];
  status: string;
}
