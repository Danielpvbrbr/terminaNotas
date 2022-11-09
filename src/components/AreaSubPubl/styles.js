import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   from {
    opacity:0;
  }

  to {
     opacity:1;
     box-shadow:  0px 1px 3px 1px #00A3FF;

  }
`;

export const Container = styled.div`
    width:${props=>props.width}vw;
    height:110px ;
    background-color: #fff;
    margin-top:5px ;
    padding:3px ;
    border-radius:5px ;
    display:flex ;
    justify-content:space-evenly;
    align-items:center ;


    img{
        width:100px ;
        height:100px ; 
        padding:2px ;
        cursor: pointer;
    }
    
`;
export const AreaInfo = styled.section`
    width: 350px;
    display:flex ;
    justify-content:space-evenly;
    flex-direction:column ;
    margin-top:5px ;
    margin-bottom:5px ;
    padding:3px ;
    height:105px ;

    h4{
        font-size:12pt ;
        text-align:start ;
        font-weight:500 ;
        cursor: pointer;

    }

    section{
        width: 162px;
        display:flex ;
        align-items: center;
        justify-content:space-between ;
        flex-direction:row ;
        margin-top:3px ;
    }
    
    button{
        width:80px ; 
        height:32px ;
        color:#fff ;
        outline:none ;
        border:none ;
        border-radius:3px ;
        font-size:9pt ;
        cursor: pointer;
        animation: ${rotate} 1s linear infinite;
    }
    
    h3{
        font-size:9pt ;
    }
`;