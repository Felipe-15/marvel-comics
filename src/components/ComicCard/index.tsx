import {
  Container,
  ImageContainer,
  Image,
  Title,
  ContentContainer,
  DetailsContainer,
  Author,
  SeeMoreButton,
} from "./styles";

import { Comic } from "../../interfaces/Comic";

type Props = {
  onSelect: (comic: Comic) => void;
};

const ComicCard = ({
  id,
  title,
  pageCount,
  thumbnail,
  resourceURI,
  creators,
  series,
  onSelect,
}: Comic & Props) => {
  const creator = creators.items[0]?.name;

  return (
    <Container>
      <ImageContainer>
        <Image src={`${thumbnail.path + "/portrait_uncanny.jpg"}`} />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <DetailsContainer>
          <Author>{creator || "Autor Indisponível"}</Author>
          <SeeMoreButton
            onClick={() =>
              onSelect({
                id: id,
                title: title,
                pageCount: pageCount,
                thumbnail: thumbnail,
                creators: creators,
                resourceURI: resourceURI,
                series: series,
              })
            }
          >
            Ver mais
          </SeeMoreButton>
        </DetailsContainer>
      </ContentContainer>
    </Container>
  );
};

export default ComicCard;
