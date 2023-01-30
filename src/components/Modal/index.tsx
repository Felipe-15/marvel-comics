import { useState } from "react";
import { Background } from "./styles";

import { Comic } from "../../interfaces/Comic";

import ComicDetails from "../ComicDetails";
import Order from "../Order";
import FinishBuy from "../FinishBuy";

type Props = {
  handleCloseModal: (value: null) => void;
};

const Modal = ({ handleCloseModal, ...comic }: Comic & Props) => {
  const [showOrder, setShowOrder] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <Background onClick={() => handleCloseModal(null)}>
      {!showOrder ? (
        <ComicDetails {...comic} handleOrder={setShowOrder} />
      ) : !address ? (
        <Order handleCancel={handleCloseModal} handleSetLocation={setAddress} />
      ) : (
        <FinishBuy
          comicName={comic.title}
          address={address}
          handleClose={handleCloseModal}
        />
      )}
    </Background>
  );
};

export default Modal;
