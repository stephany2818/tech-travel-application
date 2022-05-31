import React, { useEffect, useState, useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import CartContext from '../../context/cart';
import { Container, List, Unit } from './styles';
import api from '../../services/api';

function Home() {
  const [travelsList, setTravelList] = useState([]);
  const { state, setState } = useContext(CartContext);

  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get('/travels');
      setTravelList(data);
      console.log(data);
    }
    getTravelList();
  }, []);

  function handlerAddToCart(travel) {
    const copyCity = [...state.cart];
    const travelIndex = copyCity.findIndex((city) => city.id === travel.id);
    if (travelIndex >= 0) {
      copyCity[travelIndex].quantity += 1;
    } else {
      copyCity.push({ ...travel, quantity: 1 });
    }
    setState({
      cart: copyCity,
    });
  }

  return (
    <Container>
      <List>
        {travelsList.map((city) => (
          <Unit>
            <img src={city.photo} alt="Travel" />
            <p>{city.title}</p>
            <strong>{city.price}</strong>
            <button type="button" onClick={() => handlerAddToCart(city)}>
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
