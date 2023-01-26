export interface Comic {
  id: number;
  title: string;
  pageCount: number;
  thumbnail: { path: string; extension: string };
  resourceURI: string;
  creators: {
    avaiable: number;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      }
    ];
  };
  series: {
    name: string;
  };
}
