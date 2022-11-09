import styled from 'styled-components'

export const Container = styled.div`
    width:20vw;
    height:60vh ;
    border-radius:5px ;
    background-color:#CED4DA;
    box-shadow:  0px 1px 3px 1px #4A4D4E;

    h4{
        position:relative ;
        top:-20px ;
        text-align:center ;
    }
`;
export const Perfil = styled.section`
    position:relative ;
    top:-20px ;
    display: flex;
    flex-direction:row ;
    align-items:center ;
    justify-content:center ;
    text-align:center ;

    p{
        font-size:10pt ;
        color:#fff ;
        margin-right:4px ;
        align-self:center;
        max-width: 30ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    span{
        font-weight:bold ;
        cursor: pointer;
    }

    button{
        width:100px;
        height:30px ;
        position:relative ;
        top:-15px ;
        border-radius:5px ;
        border: 1px solid #00A3FF;
        cursor: pointer;
        background-color:#343A40 ;
        color:#fff ;
    }
`;
export const ListQuestions = styled.section`
   height:57vh ;
   position:relative ;
   top:-17px ;
   display:flex ;
   flex-direction:column ;
   align-items: center;
   
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
`;
export const Line = styled.section`
    width:17.5vw;
    height:30px ;
    font-size:10pt ;
    margin-top:5px ;
    background-color:#fff;
    display:flex ;
    align-items:center ;
    justify-content:start ;
    padding-left:5pt;
    border-radius:5px ;
    box-shadow:  0px 1px 3px 1px #4A4D4E;
    transition: transform .3s ease;
    
    &&:hover{
       /* width:18.5vw;
       height:34px ; */
       cursor: help;
       transform: scale(1.1);
    }
`;
