/* eslint-disable no-alert */
import React, { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import CartContext from '../../context/cart';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  SubTotal,
  TextTotalPlay,
  vTotalToPlay,
  ToHeader,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);

  function deleteCart(travelCart) {
    const copyTravel = [...state.cart];
    const travelIndex = copyTravel.findIndex(
      (travel) => travelCart.id === travel.id,
    );
    if (travelIndex >= 0) {
      alert(`Desea eliminar el viaje del carrito ${travelCart.title}`);
    }
  }

  return (
    <Container>
      <ContainerList>
        <ToHeader>
          <h1> </h1>
          <h1>PRODUCTO</h1>
          <h1>CANTIDAD</h1>
          <h1>PRECIO</h1>
        </ToHeader>
        {state.cart.map((travel) => (
          <TravelItem>
            <img src={travel.photo} alt={travel.title} />
            <Info>
              <p>{travel.title}</p>
              <strong>R$ {travel.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={travel.quantity} />
            <SubTotal>
              <strong>{travel.quantity * travel.price}</strong>
              <button type="button" onClick={() => deleteCart(travel)}>
                <FiTrash2 size={24} color="#0676d9" border="none" />
              </button>
            </SubTotal>
          </TravelItem>
        ))}
        <TextTotalPlay>
          <p>TOTAL: </p>
          <vTotalToPlay />
        </TextTotalPlay>
      </ContainerList>
    </Container>
  );
}

export default Cart;
