import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   from {
    opacity:0;
    background-color: #00A3FF;
  }

  to {
     opacity:1;
     box-shadow:  0px 1px 3px 1px #00A3FF;
     background-color: #53892F;
  }
`;

export const Container = styled.div`
    width:${props=>props.width}vw;
    background-color: #fff;
    margin-top:5px ;
    padding:3px ;
    border-radius:5px ;

    img{
        width:100% ;
        height:300px ; 
        
    }
    div{
        padding:3px ;
        margin-top:5px ;
        margin-bottom:5px ;
    }
    div h4{
       text-align:start ;
       font-size: 12pt;
       max-width:38vw ;
       white-space: 5;                  
       overflow: hidden; 
       text-overflow:ellipsis;
    }
    
    
`;
export const AreaInfo = styled.section`
    display:flex ;
    justify-content:space-between ;
    flex-direction:row ;
    align-items:center ;
    margin-top:5px ;
    margin-bottom:5px ;
    padding:3px ;

    h3{
        font-size:9pt ;
    }
    section{
        width:125px ;
        display:flex ;
    }
    button{
        width:80px ; 
        height:25px ;
        color:#fff ;
        outline:none ;
        border:none ;
        border-radius:3px ;
        cursor: pointer;
        animation: ${rotate} 0.8s linear infinite;
    }
`;