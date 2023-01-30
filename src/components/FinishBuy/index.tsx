import {
  Container,
  TitleContainer,
  Title,
  Image,
  ComicTitle,
  Address,
  Message,
  CloseButton,
} from "./styles";

type Props = {
  comicName: string;
  address: string;
  handleClose: (value: null) => void;
};

const FinishBuy = ({ comicName, address, handleClose }: Props) => {
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <TitleContainer>
        <Title>Pedido confirmado!</Title>
        <Image src="https://cdn-icons-png.flaticon.com/512/190/190411.png" />
      </TitleContainer>
      <ComicTitle>HQ: {comicName}</ComicTitle>
      <Address>
        <strong>Endereço: </strong> {address}
      </Address>
      <Message>Obrigado pela compra!</Message>
      <CloseButton onClick={() => handleClose(null)}>Fechar</CloseButton>
    </Container>
  );
};

export default FinishBuy;
