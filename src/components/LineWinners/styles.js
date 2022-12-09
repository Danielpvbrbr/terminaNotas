import styled from 'styled-components'

export const Container = styled.section`
    width:${props => props.width};
    /* height:${props => props.height}px ; */
    margin-top:5px ;
    background-color:#fff;
    border-radius: 5px;
    box-shadow:  0px 1px 3px 1px #4A4D4E;
    display:flex ;
    flex-direction:row;
    justify-content:space-between ;
    align-items:center ;
    padding:2px ;

    div{
        width:${props => props.width}vw;
        /* height:${props => props.height}px ; */
        display:flex ;
        flex-direction:column;
        justify-content:center ;
        align-items:start ;
        padding:5px ;
    }
    div h4{
      font-size: 10pt;
      margin:0 ;
      
    }

    div p{
      font-size: 8pt;     
      }

    img{
        width: 55px ;
        height: 55px;
    }
`;

