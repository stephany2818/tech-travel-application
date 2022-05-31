import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  SubTotal,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);
  return (
    <Container>
      <ContainerList>
        {state.cart.map((travel) => (
          <TravelItem>
            <img src={travel.photo} alt={travel.title} />
            <Info>
              <p>{travel.title}</p>
              <strong>{travel.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={1} />
            <SubTotal>
              <p>240.00</p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </SubTotal>
          </TravelItem>
        ))}
      </ContainerList>
    </Container>
  );
}

export default Cart;
