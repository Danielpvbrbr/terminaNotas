import styled from 'styled-components'

export const Container = styled.div`
    width:100vw;
    height:100vh ;
`;

export const AreaMenu = styled.section`
    width:${props => props.width};
    height:10vh ;
    background-color:#343A40;
`;
export const AreaInfo = styled.section`
    width:${props => props.width}vw;
    /* min-width:900px; */
    display:flex ;
    flex-direction:row ;
    justify-content:space-around ;
    position:relative ;
    top:-30px ;
`;
export const AreaBody = styled.section`
    max-width:${props => props.width};
    background-color:#CED4DA;
    border-radius:10px ;
`;

export const Info = styled.section`
    position:relative ;
    top:-18px ;

    h4{
        text-align:center ;
    }
`;
