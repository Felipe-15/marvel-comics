export interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extensions: string };
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
}
