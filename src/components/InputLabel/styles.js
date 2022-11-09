import styled from 'styled-components'

export const Container = styled.div`
    width:${props => props.width}vw ;
    height:65px ;
    display:flex ;
    flex-direction:column ;
    background-color: ${props => props.background};
    border-radius: 5px;
    
    label{
        font-size:11pt ;
        color: ${props => props.color};
    }

    span{
        display:flex ;
        flex-direction:row ;
        align-items:center ;
        justify-content:space-evenly ;
        border:1px solid #B7B7B7;
        border-radius: 5px;
        background-color: ${props => props.background};
    }
    span input{
        width:${props => props.isIcon ? (props.width2 < 500 ? (props.width - 10) : (props.width - 3.5)) : (props.width - 1)}vw ;
        height:40px ;
        padding-left:2pt ;
        background-color: ${props => props.background};
        color: ${props => props.color};
        border:0 ;
        font-size:12pt ;

    }
    
`;