import styled from 'styled-components';

export const Container = styled.div`
  font-weight: bold;

  #navegation{
    background: #FFFFFF;

    a {
      color: #7749BD;

      &:hover {
        color: tomato;
      }
    }
  }

  #name {
    margin: 0 auto;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 16px;
    }
  }

  #logo{
    display: flex;
    align-items: center;
    color: #7749BD;
  }

  img{
    width: 50px;
    height: 45px;
    color: white;
    margin-right: 10px;

  }
`;
