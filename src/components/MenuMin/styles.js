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
    width:${props => props.width}vw;
    /* height:39vh ; */
    display:flex ;
    flex-direction:column ;
    justify-content:center;
    align-items: center ;
    ul{
        display:flex ;
        flex-direction:column ;
        justify-content:space-evenly ;
        align-items: center ;
    }
    ul button{
        width:150px ;
        height:27px ;
        background-color:#00A3FF ;
        color:#fff ;
        border-radius:5px ;
        cursor: pointer;
        border:none ;
        margin-top:3px ;
    }
    li{
        font-size:25pt ;
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
    svg{
        margin-top :3px ; 
    }
`;

