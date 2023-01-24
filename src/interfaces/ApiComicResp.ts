import { Comic } from "./Comic";

export interface ApiComicResp {
  data: {
    results: Comic[];
  };
}
