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

export interface Record {
  buildings: Building[];
  id: string;
  imageRights: imageRights;
  images: string[];
  nonPresenterAuthors: nonPresenterAuthors[];
  title: string;
  urls: string;
  year: string;
}
