import React from 'react';
import { MdDelete } from 'react-icons/md';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  SubTotal,
} from './styles';

function Cart() {
  return (
    <Container>
      <ContainerList>
        <TravelItem>
          <img src="" alt="titulo del Viaje" />
          <Info>
            <p>Titulo</p>
            <strong>Precio</strong>
          </Info>
          <Quantity readOnly type="number" value={1} />
          <SubTotal>
            <p>240.00</p>
            <button type="button">
              <MdDelete size={24} color="#0676d9" />
            </button>
          </SubTotal>
        </TravelItem>
        <TravelItem>
          <img src="" alt="titulo del Viaje" />
          <Info>
            <p>Titulo</p>
            <strong>Precio</strong>
          </Info>
          <Quantity />
          <SubTotal>
            <p>240.00</p>
            <button type="button">
              <MdDelete size={24} color="#0676d9" />
            </button>
          </SubTotal>
        </TravelItem>
        <TravelItem>
          <img src="" alt="titulo del Viaje" />
          <Info>
            <p>Titulo</p>
            <strong>Precio</strong>
          </Info>
          <Quantity />
          <SubTotal>
            <p>240.00</p>
            <button type="button">
              <MdDelete size={24} color="#0676d9" />
            </button>
          </SubTotal>
        </TravelItem>
      </ContainerList>
    </Container>
  );
}

export default Cart;
