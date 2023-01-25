import { useApi } from "../../hooks/useApi";
import { Container } from "./styles";

import { ApiComicResp } from "../../interfaces/ApiComicResp";
import { Comic } from "../../interfaces/Comic";

import ComicCard from "../ComicCard";
import NoComics from "../NoComics";

const ComicsList = () => {
  const { data } = useApi<ApiComicResp>("/comics");

  let comics: Comic[] = [];

  if (data) {
    comics = data?.data.results;
  }

  return (
    <>
      {comics.length > 0 ? (
        <Container>
          {comics.map((comic) => {
            return (
              <div key={comic.id.toString()}>
                <ComicCard {...comic} />
              </div>
            );
          })}
        </Container>
      ) : (
        <NoComics />
      )}
    </>
  );
};

export default ComicsList;
