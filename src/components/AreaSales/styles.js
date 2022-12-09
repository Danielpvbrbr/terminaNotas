import styled from 'styled-components';

export const Container = styled.div`
   background-color: #fff;
   border-radius:5px ;
   margin-bottom:5px ;
`;
export const Area = styled.section`
    width:${props=>props.width};
    height:100px ;
    margin-top:5px ;
    padding:3px ;
    display:flex ;
    justify-content:space-evenly;
    align-items:center ;

    img{
        width:100px ;
        height:100px ; 
        padding:2px ;
        cursor: pointer;
    }
    section{
        width: 350px;
        display:flex ;
        flex-direction:column ;
        margin-top:5px ;
        margin-bottom:5px ;
        padding:3px ;
        height:105px ;

    }
    section p span{
        font-size:10pt ;
        text-align:start ;
        font-weight:500 ;
        cursor: pointer;
        
    }
    section h4{
        font-size:12pt ;
        text-align:start ;
        font-weight:500 ;
        cursor: pointer;
    }
    section p{
        font-size:10pt ;
        text-align:start ;
        font-weight:300 ;
        cursor: pointer;
        max-width: 40ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
export const Info = styled.section`
    width:${props=>props.width};
    display:flex ;
    justify-content:space-evenly;
    flex-direction:column ;
    padding:3px ;

    section{
        width:${props=>props.width};
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
        margin-bottom:-1px ;
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
        font-size:10.5pt ;
        border-bottom:1px solid #CED4DA;
        margin:2px ;
        font-weight:300 ;
        word-break: break-all;
    }
    
`;