import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, List, Unit } from './styles';

function Home() {
  return (
    <Container>
      <List>
        <Unit>
          <img src="" alt="Travel" />
          <p>Israel</p>
          <strong>240.00</strong>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
            </div>
          </button>
        </Unit>
      </List>
    </Container>
  );
}

export default Home;
