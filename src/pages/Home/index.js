import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, List, Unit } from './styles';
import api from '../../services/api';

function Home() {
  const [travelsList, setTravelList] = useState([]);
  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get('/travels');
      setTravelList(data);
      console.log(data);
    }
    getTravelList();
  }, []);
  return (
    <Container>
      <List>
        {travelsList.map((city) => (
          <Unit>
            <img src={city.photo} alt="Travel" />
            <p>{city.title}</p>
            <strong>{city.price}</strong>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Agregar al Carrito</span>
            </button>
          </Unit>
        ))}
      </List>
    </Container>
  );
}

export default Home;
