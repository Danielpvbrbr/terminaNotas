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
   display:flex ;
   justify-content:center ;
   align-items:center ;
   border-radius:5px ;
   margin-bottom:2px ;
`;
export const Alert = styled.div`
   width:${props => props.width};
   display:flex ;
   justify-content:center ;
   align-items:center ;
   border-radius:5px ;
   margin-bottom:2px ;
   background-color: ${props => props.color};
   height:45px ;
   
   p{
    color:#fff ;
   }
`;

export const Info = styled.section`
    width:${props => props.width};
    background-color:#fff ;
    display:flex ;
    justify-content:space-evenly;
    flex-direction:column ;
    align-items:center ;
    padding:3px ;
    border-radius: 5px;
    margin-top:20px ;

    section{
        width:${props => props.width}vw;
        display:flex ;
        flex-direction:row ;
        justify-content:center;
        align-items:center ;

    }
    section span{
        font-size:10pt ;
        text-align:start ;
        font-weight:500 ;
        cursor: pointer;
        color:#000 ;
        margin-top:4px ;
        margin-bottom:-3px ;
        margin-right:2px ;
    }
    ul{
        display:flex ;
        flex-direction:column ;
        list-style:none ;
    }
    li span{
        font-size:10.5pt ;
        font-weight:500 ;
    }
    li{
        display:flex ;
        flex-direction:row ;
        justify-content:space-between;
        align-items:center ;
        font-size:10.5pt ;
        margin:2px ;
        font-weight:300 ;
    }
`;
export const Button = styled.button`
        width:${props => props.width};
        background-color:${props => props.bgColor};
        animation:${animated} 0.5s linear ;
        color:#fff ;
        display:flex ;
        flex-direction:row ;
        justify-content:center;
        align-items:center ;
        font-size:10pt ;
        margin:2px ;
        height:35px ;
        font-weight:400 ;
        outline: none;
        border:none ;
        cursor: pointer;
        border-radius:5px ;
`;