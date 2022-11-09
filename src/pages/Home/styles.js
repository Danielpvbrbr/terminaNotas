import styled from 'styled-components';

export const Container = styled.div`
    width:${props => props.width}vw;
    display:flex ;
    flex-direction:column ;
    align-items:center ;

    h4{
        margin-top:10px ;
        margin-bottom:8px ;
    }
`;

