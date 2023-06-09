import styled from 'styled-components'

export const Container = styled.div`
    width:${props => props.width};
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
        width:${props => props.width2};
        height:40px ;
        padding-left:2pt ;
        background-color: ${props => props.background};
        color: ${props => props.color};
        border:0 ;
        font-size:12pt ;
        border-left:1px solid #B7B7B7;
 
    }
    span input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
        
    span input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }
`;