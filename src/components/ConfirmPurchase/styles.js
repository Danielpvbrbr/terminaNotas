import styled, { keyframes } from 'styled-components';

const animated = keyframes`
   from {
    opacity:0;
  }

  to {
     opacity:1;
  }
`;
export const Container = styled.div`
    width:100vw ;
    height:100vh ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    position:absolute ;
    z-index:9999 ;
    background:rgba(0,0,0,0.5) ;
    animation: ${animated} 0.5s linear ;
`;

export const AreaForm = styled.div`
    width:${props => props.width}vw;
    background-color: #fff;
    border-radius:5px;
    padding-bottom: 15px;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    
    header{
        width:${props => props.width}vw;
        height:40px ;
        display:flex ;
        justify-content:space-between ;
        align-items:center ;
        border-bottom:1px solid #B7B7B7 ;
        padding:6px ;
        color:#343A40 ;
    }

    section{
        display:flex ;
        flex-direction:column ;
        justify-content:space-between ;
        align-items:center ;
        margin-top:9px ;
    }
  
    
`;

export const Info = styled.div`
      width:${props => props.width}vw;
      padding:3px 2px 0px;

      h3{
        font-size:11pt;
        color: #838383;
      }
      h4{
        margin-top:4px ;
        font-size:10pt;
        color: #838383;
      }
`;

export const QrCode = styled.img`
      width:200px ;
      height:200px ;
`;

export const AreaQr = styled.div`
      width:${props => props.width}vw;
      height:30px ;
      display:flex ;
      flex-direction:row ;
      justify-content:space-between ;
      align-items:center ;
      border-width:0.1
`;

export const InputCopy = styled.input`
     width:${props => props.width}vw;
      height:30px ;
`;

export const Details = styled.div`
      width:${props => props.width}vw;
      padding:3px 2px 3px;

      h2{
        font-size:10.5pt ;
        padding:2.5px ;
        color:#838383;
      }
      p{
        font-size:10pt ;
        padding:2.5px ;
      }
      h4{
        font-size:9pt ;
        color:#838383	 ;
        padding:2.5px ;
      }
`;
export const DetailsPurchase = styled.div`
      width:${props => props.width}vw;
      padding:3px 2px 3px;

      h2{
        font-size:10.5pt ;
        padding:2.5px ;
        color:#838383;
      }
      p b{
        font-size:10.5pt ;
        padding:2.5px ;
        color:#adadad;
      }
      p{
        display:flex ;
        flex-direction:row ;
        justify-content:space-between ;
        align-items:center ;
        font-size:10pt ;
        padding:2.5px ;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap;
        
      }
      
`;
export const AreaButton = styled.div`
        display:flex ;
        flex-direction:column ;
        justify-content:space-between ;
        align-items:center ;
        margin-top:5px ;
    
     button{
        width:${props => props.width}vw;
        height:40px ;
        background-color:${props => props.color} ;
        border:none ;
        border-radius:5px ;
        color:#fff ;
        cursor: pointer;
    }
    h3{
        font-weight:500 ;
        color: #779FE5;
        font-size:11pt ;
        margin-top:5px ;
        cursor: pointer;
    }
`;
