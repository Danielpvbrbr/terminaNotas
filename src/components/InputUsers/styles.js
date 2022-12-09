import styled from 'styled-components';

export const Container = styled.div`
   width: ${props => props.width};
   display:flex ;
   flex-direction:row;
   justify-content:space-between ;
   align-items:center ;
   margin-bottom:2px ;
`;

export const AreaIcone = styled.div`
    svg{
        margin-top:24px ;
        margin-left:3px ;
    }
`;
