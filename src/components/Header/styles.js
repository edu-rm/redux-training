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
