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
export const Area = styled.div`
    width:${props => props.width};
    background-color:#fff ;
    display:flex;
    align-items:center ;
    flex-direction:column ;
    margin-top:5px ;
    padding-bottom:6px ;
    border-radius:5px ;

    h3{
        font-size:10pt ;
        font-weight:500 ;
    }
    
`;
export const BtnFinishing = styled.button`
    width:${props => props.width};
    height:40px ;
    background-color:#428651 ;
    color: #fff;
    display:flex;
    align-items:center ;
    justify-content: space-between;
    border:none;
    padding:5px ;
    border-radius:5px ;
    cursor:pointer;
    box-shadow:  0px 1px 3px 1px #00A3FF;
    margin-bottom:6px;

    span{
        width:50px ;
    }
    h2{
        font-size:10pt ;
        text-align:center ;
    }
`;