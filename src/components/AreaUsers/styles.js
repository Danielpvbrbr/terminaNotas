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
   background-color: #fff;
   border-radius:5px ;
   margin-bottom:5px ;
`;
export const Area = styled.section`
    width:${props => props.width};
    height:40px ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between;
    align-items:center ;
    padding:6px ;

    section{
        width: 350px;
        display:flex ;
        flex-direction:column ;
    }
    section h4{
        font-size:12pt ;
        text-align:start ;
        font-weight:500 ;
        cursor: pointer;
    }
 
`;
export const Info = styled.section`
    width:${props => props.width};
    display:flex ;
    justify-content:space-evenly;
    flex-direction:column ;
    align-items:center ;
    padding:3px ;

    section{
        width:${props => props.width};
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
        color:#CED4DA ;
        margin-top:4px ;
        margin-bottom:-3px ;
        margin-right:2px ;
    }
    ul{
        display:flex ;
        flex-direction:column ;
        list-style:none ;
        align-items:center ;
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