import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerList = styled.ul`
  width= 100%;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 36px 44px;
  align-items: center;
  margin-top: 45px;
  max-width= 958px;
`;

export const TravelItem = styled.li`
  width= 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #666;
  padding: 10px 0px;

  img {
    heigth: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  strong {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const Quantity = styled.input`
  font-size: 16px;
  color: #666;
  padding: 6px;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border-bottom: 1px solid #0676d9;
  text-aling: center;
`;

export const SubTotal = styled.div``;
