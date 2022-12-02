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

export const LineOption = styled.div`
    width:${props=>props.width};
    height:30px ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    padding:6px ;
    align-items:center ;
    cursor: pointer;
    margin:3px ;
    background-color:#fff ;
    box-shadow:  0px 1px 3px 1px #4A4D4E;
    border-radius:3px ;
    
    h3{
        font-size:10.5pt;
        color: #4A4D4E;
        margin-top:10px ;
        margin-bottom:8px ;
    }
`;