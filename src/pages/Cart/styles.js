import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerList = styled.ul`
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 36px 44px;
  align-items: center;
  margin-top: 45px;
  max-width: 958px;
`;

export const TravelItem = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #666;
  justify-content: space-between;
  align-items: center;

  img {
    height: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;

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
  aligncontent: center;
  align-items: center;
`;

export const SubTotal = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  align-items: center;

  strong {
    margin-right: 10px;
    font-size: 16px;
  }

  button {
    margin-bottom: 0px;
    border: 0px;
    background-color: white;
    padding: 10px 10px;
  }
`;

export const TextTotalPlay = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    margin-right: 10px;
    font-weight: 600;
    font-size: 16px;
    color: #999999;
  }

  strong {
    margin-top: 10px;
    font-size: 18px;
  }
`;

export const ToHeader = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 14px;
    font-weight: 600;
    color: #999999;
  }
`;
