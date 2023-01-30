import { useState, useMemo } from "react";
import { useApi } from "../../hooks/useApi";
import {
  PageContainer,
  ListContainer,
  LoadMoreContainer,
  LoadMoreButton,
  TinyLoader,
} from "./styles";

import { ApiComicResp } from "../../interfaces/ApiComicResp";
import { Comic } from "../../interfaces/Comic";

import ComicCard from "../ComicCard";
import NoComics from "../NoComics";
import Modal from "../Modal";
import { api } from "../../config/api";

const ComicsList = () => {
  const { data } = useApi<ApiComicResp>("/comics");
  const [comics, setComics] = useState<Comic[] | []>([]);
  const [isRequesting, setIsRequesting] = useState(false);

  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);

  if (data && !comics.length) {
    setComics(data?.data.results);
  }

  const loadMoreComics = async () => {
    setIsRequesting(true);

    const {
      data: {
        data: { results },
      },
    } = await api.get(`/comics?offset=${comics.length}`);

    console.log(results);

    setIsRequesting(false);
    setComics((prev) => [...prev, ...results]);
  };

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
        <LoadMoreContainer>
          <LoadMoreButton disabled={isRequesting} onClick={loadMoreComics}>
            {!isRequesting ? "+ Carregar mais" : <TinyLoader />}
          </LoadMoreButton>
        </LoadMoreContainer>
      </ListContainer>
    ),
    [comics, isRequesting]
  );

  return (
    <PageContainer>
      {comics.length ? (
        <>
          {selectedComic && (
            <Modal {...selectedComic} handleCloseModal={setSelectedComic} />
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
