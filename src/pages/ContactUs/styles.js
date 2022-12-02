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
export const AreaSocial = styled.div`
    width:${props => props.width};
    height:4vh ;
    display:flex ;
    flex-direction:row ;
    align-items:center ;
    margin: 5px 0px 0px;

    button{
        width:100px ;
        height:30px ;
        margin: 2px 3px 0px 3px;
        border-radius:5px ;
        outline:none ;
        border: none;
        background-color: #00A3FF;
        color:#fff ;
        cursor: pointer;
    }
    
    span{
        width:100px ;
        display:flex ;
        flex-direction:row ;
        justify-content: space-evenly;
        align-items:center ;
    }
`;

export const TextArea = styled.textarea`
    width:${props => props.width};
    height:30vh ;
    border-radius:8px ;
    padding:10px ;
    border: none;
`;

