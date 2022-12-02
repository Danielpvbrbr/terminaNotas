import styled from 'styled-components';

export const Container = styled.div`
    max-width:${props => props.width}vw;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    padding:3px ;
    
    h4{
        margin-top:10px ;
        margin-bottom:8px ;
    }
`;

