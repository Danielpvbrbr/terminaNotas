import styled from 'styled-components'

export const Container = styled.section`
    width:20vw;
    height:60vh ;
    background-color:#CED4DA;
    border-radius:5px ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    box-shadow:  0px 1px 3px 1px #4A4D4E;

    h4{
        text-align:center ;
    }
`;
export const Logo = styled.img`
    width:130px ;
    position: relative ;
    top:-30px ;
`;
export const ListWinners = styled.section`
   height:56vh ;
   display:flex ;
   flex-direction:column ;
   align-items: center;
   overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
`;

export const AreaLeft = styled.section`
    width:20vw;
    position:relative ;
    top:-30px ;
`;
export const Line = styled.div`
    width:${props => props.width};
    height:${props => props.height}px ;
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
        height:${props => props.height}px ;
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


