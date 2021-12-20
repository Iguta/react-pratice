import styled from 'styled-components';

export const Wrapper = styled.div`
  padding:10px;
  form{
    width:250px;
    margin: 0 auto;
  }
  input{
    margin-right:10px;
  }
`;

export const ContactContent = styled.div`
  margin: 0 auto;
  min-width:200px;
  max-width:250px;
  ul{
    list-style: none;
  }
  li:nth-child(odd){
    background-color:rgb(0, 125, 128);
  }
  li{
    background-color:grey;
    margin:10px;
    min-height:30px;
    text-align:center;
    border-radius:20px;
    
  }
`;
