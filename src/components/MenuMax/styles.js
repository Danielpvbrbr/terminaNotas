import styled from 'styled-components'

export const Container = styled.div`
    width:${props=>props.width};
    position:relative ;
    top:-30px ;

    ul{
        display:flex ;
        flex-direction:row ;
        justify-content:space-evenly ;
        align-items:center ;
    }
    
    li{
        font-size:10pt ;
        color:#fff ;
        list-style:none ;
        font-weight:bold ;
        cursor: pointer;
    }
    div{
        display:flex ;
        flex-direction:row ;
        justify-content:space-between ;
        align-items:center ;
        margin-top: -5px;
        padding-bottom: 3px;
        padding-left:5px ;
        padding-right:6px ;
    }
    div h3{
        color:#fff ;
        display:inline ;
    }
    div h3 span{
        color:#428651 ;
    }
  
`;
