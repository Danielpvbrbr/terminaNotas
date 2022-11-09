import styled from 'styled-components';

export const Container = styled.div`
   background-color: #fff;
   border-radius:5px ;
   margin-bottom:5px ;
`;
export const Area = styled.section`
    width:${props=>props.width}vw;
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
    width:${props=>props.width}vw;
    display:flex ;
    justify-content:space-evenly;
    flex-direction:column ;
    padding:3px ;

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
        color:#CED4DA ;
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