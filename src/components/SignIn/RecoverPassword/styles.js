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
    background-color: #fff;
    border-radius:5px;
    padding-bottom:10px ;

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
        margin-top:25px ;
    }
    button p{
        font-size:10pt ;
        margin-left:21px ;
        color:#343A40 ;
        cursor: pointer;
    }
    
`;
export const Alert = styled.p`
        color:${props => props.color};
        font-weight:200 ;
        font-size:8pt;
        text-align:left ;
        padding-left: 17px;
`;

export const AreaButton = styled.div`
        display:flex ;
        flex-direction:column ;
        justify-content:space-between ;
        align-items:center ;
        margin-top:25px ;
    
     button{
        width:${props => props.width}vw;
        height:40px ;
        background-color:${props => props.color} ;
        border:none ;
        border-radius:5px ;
        color:#fff ;
        cursor: pointer;
        margin-bottom:5px;
        display:flex ;
        justify-content:center ;
        align-items:center ;
    }
    button p{
        color: #fff;
        font-size:10pt ;
        margin-top:-0.5px
    }
    p{
        font-weight:500 ;
        color: #B7B7B7;
        font-size:10pt ;
        margin-top:5px ;
        cursor: pointer;
        margin-left:3px
    }
`;
