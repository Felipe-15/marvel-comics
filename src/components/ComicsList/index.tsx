import { useState, useMemo } from "react";
import { useApi } from "../../hooks/useApi";
import { PageContainer, ListContainer } from "./styles";

import { ApiComicResp } from "../../interfaces/ApiComicResp";
import { Comic } from "../../interfaces/Comic";

import ComicCard from "../ComicCard";
import NoComics from "../NoComics";
import Modal from "../Modal";

const ComicsList = () => {
  const { data } = useApi<ApiComicResp>("/comics");

  const [selectedComic, setSelectedComic] = useState({} as Comic);

  let comics: Comic[] = [];

  if (data) {
    comics = data?.data.results;
  }

  const body = useMemo(
    () => (
      <ListContainer>
        {comics.map((comic) => {
          return (
            <div key={comic.id.toString()}>
              <ComicCard {...comic} onSelect={setSelectedComic} />
            </div>
          );
        })}
      </ListContainer>
    ),
    [data]
  );

  return (
    <PageContainer>
      {comics.length ? (
        <>
          {selectedComic.title && (
            <Modal
              {...selectedComic}
              handleBackgroundClick={setSelectedComic}
            />
          )}
          {body}
        </>
      ) : (
        <NoComics />
      )}
    </PageContainer>
  );
};

export default ComicsList;
