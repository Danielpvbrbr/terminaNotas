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
    width:${props => props.width};
    background-color: #fff;
    border-radius:5px;
 
    header{
        width:${props => props.width}vw;
        height:40px ;
        display:flex ;
        justify-content:space-between ;
        align-items:center ;
        border-bottom:1px solid #B7B7B7 ;
        padding:10px ;
        color:#343A40 ;
    }

    section{
        display:flex ;
        flex-direction:column ;
        justify-content:space-between ;
        align-items:center ;
    }
    p{
        font-size:10pt ;
        margin-left:21px ;
        color:#343A40 ;
        cursor: pointer;
    }
`;

export const AreaButton = styled.div`
        display:flex ;
        flex-direction:column ;
        justify-content:space-between ;
        align-items:center ;
        margin-top:10px ;
        margin-bottom:10px ;
    
    h3{
        font-weight:500 ;
        color: #779FE5;
        font-size:11pt ;
        margin-top:5px ;
        cursor: pointer;
    }
`;
export const Btn = styled.button`
        width:${props => props.width};
        height:40px ;
        background-color:${props => props.background};
        border:none ;
        border-radius:5px ;
        color:${props => props.color};
        cursor: pointer;
        font-weight:600 ;
        margin-bottom:5px ;
    

`;