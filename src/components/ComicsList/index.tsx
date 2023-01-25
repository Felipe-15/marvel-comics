import { useApi } from "../../hooks/useApi";
import { Container } from "./styles";

import { ApiComicResp } from "../../interfaces/ApiComicResp";
import { Comic } from "../../interfaces/Comic";

import ComicCard from "../ComicCard";

const ComicsList = () => {
  const { data } = useApi<ApiComicResp>("/comics");
  let comics: Comic[] = [];

  if (data) {
    comics = data?.data.results;
  }

  return (
    <Container>
      {comics.length > 0 &&
        comics.map((comic) => {
          return (
            <div key={comic.id.toString()}>
              <ComicCard {...comic} />
            </div>
          );
        })}
    </Container>
  );
};

export default ComicsList;
