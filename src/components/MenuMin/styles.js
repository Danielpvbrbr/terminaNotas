import styled, { keyframes } from 'styled-components';

const animated = keyframes`
   from {
    opacity:0;
  }

  to {
     opacity:1;
  }
`;
export const Container = styled.div`
    width:100vw ;
    height:100vh ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    position:absolute ;
    z-index:9999 ;
    background:rgba(0,0,0,0.5) ;
    animation: ${animated} 0.5s linear ;
`;

export const AreaForm = styled.div`
    width:${props => props.width -3}vw;
    height:40.5vh ;
    display:flex ;
    flex-direction:column ;
    justify-content:center;
    align-items: center ;
    background:rgba(0,0,0,0.5) ;
    border-radius: 7px;

    ul{
        display:flex ;
        flex-direction:column ;
        justify-content:center ;
        align-items: start ;
        height:29vh ;
    }
     button{
        width:150px ;
        height:35px ;
        background-color:#fff ;
        color:#000 ;
        border-radius:5px ;
        cursor: pointer;
        border:none ;
        margin-top:5px ;
    }
    li{
        font-size:20pt ;
        color:#fff ;
        list-style:none ;
        font-weight:bold ;
        cursor: pointer;
    }
    div{
        display:flex ;
        justify-content:center ;
        align-items:center ; 
    }
    div p{
       margin-right :3px ;
       color: #fff;
    }
  
`;

