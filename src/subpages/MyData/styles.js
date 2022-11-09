import styled from 'styled-components';

export const Container = styled.div`
   display:flex ;
   justify-content:center ;
   align-items:center ;
   border-radius:5px ;
   margin-bottom:2px ;
`;
export const Info = styled.section`
    width:${props=>props.width}vw;
    background-color:#fff ;
    display:flex ;
    justify-content:space-evenly;
    flex-direction:column ;
    padding:3px ;
    border-radius: 5px;
    margin-top:20px ;

    section{
        width:${props=>props.width}vw;
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