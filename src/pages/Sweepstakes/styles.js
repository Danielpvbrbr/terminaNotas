import styled from 'styled-components';

export const Container = styled.div`
    display:flex ;
    flex-direction:column ;
    align-items:center ;

    h4{
        margin-top:10px ;
        margin-bottom:8px ;
    }
`;


export const AreaOption = styled.section`
    width:${props=>props.width};
    height:63px ;
    margin-top:5px ;
    background-color:#fff;
    border-radius: 5px;
    display:flex ;
    flex-direction:row;
    justify-content:center ;
    align-items:center ;
    
    svg{
        margin-left:5px ;
    }
`;
export const Option = styled.span`
       width:${props=>props.width}px;
       height:40px ;
       background-color:${props => props.bg ? '#00A3FF' : '#33383E'};
       color:#fff ;
       font-weight:500 ;
       display:flex ;
       justify-content:center ;
       align-items:center ;
       cursor: pointer;
       margin:0.5px ;
       border-top-right-radius: ${props => props.border && props.pos === 'left' ? '5px' : '0px'};
       border-bottom-right-radius: ${props => props.border && props.pos === 'left' ? '5px' : '0px'};
       border-top-left-radius: ${props => props.border ? '0px' : '5px'};
       border-bottom-left-radius: ${props => props.border ? '0px' : '5px'};
    
`;