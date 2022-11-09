import styled from 'styled-components';

export const Container = styled.div`
    /* display:flex ;
    flex-direction:column ;
    align-items:center ;

    h4{
        margin-top:10px ;
        margin-bottom:8px ;
    } */
`;
export const Area = styled.div`
    width:${props => props.width}vw;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    background-color:#fff ;
    border-radius: 5px;
    padding-bottom: 8px;
    margin-top:10px ;

    h3{
        color: #00A3FF;
        font-size:10pt ;
        font-weight:800 ;
        margin:3px ;
    }
`;
export const Button = styled.button`
        width:${props => props.width}vw;
        height:45px ;
        background-color:${props => props.bg};
        border:none ;
        border-radius: 5px;
        color:#fff ;
        font-weight:600 ;
        margin-bottom:7px ;
        cursor: pointer;
`;
export const AreaUpload = styled.section`
    width:${props => props.width}vw;
    height:36vh ;
    display:flex ;
    flex-direction:column ;
    align-items:flex-start ;
    padding:3px ;
    margin-top:5px ;

    section{
        width:${props => props.width - 1}vw;
        height:30vh ;
        display:flex ;
        flex-direction:column ;
        justify-content:center ;
        align-items:center ;
        margin-bottom:8px ;
        margin-left:1px ;
        border:1px solid #c2c9d6 ;
    }
    input{
        margin-left:1px ;
    }
    img{
        width:${props => props.width - 0.9}vw;
        height:30vh ;
    }
`;
export const AreaDesc = styled.div`
    width:${props => props.width}vw;
    display:flex ;
    flex-direction:column ;
    padding:4px ;

    textarea{
        padding:5px ;
        margin-top:1px ;
        border:1px solid #c2c9d6 ;
    }
`;
export const AreaOption = styled.div`
        width:${props => props.width}vw;
        border-radius:5px ;
        padding:5px ;
        background-color:#00A3FF ;

        h4{
            color:#fff ;
            font-weight:500 ;
            font-size:10pt ;
            padding-top:-30 ;
        }
        section{
            width:${props => props.width -1}vw;
            margin-top:2px ;
            border-top:1px solid #c2c9d6 ;   
        }
        p{
            color:#fff ;
            font-size:11pt ;
            font-weight:600
        }
        p span{
            color:#fff ;
            font-size:11pt ;
            font-weight:300
        }
`;

export const Status = styled.select`
        width:${props => props.width}vw;
        height:30px ; 
        margin-top:5px ;
        margin-bottom:8px ;
`;