import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width:${props => props.width};
    height:${props => props.height}px;
    margin-top:5px ;
    flex-wrap: wrap;
    align-items:center ;
    display:flex;
    align-items:center ;
    justify-content: space-between;
    margin-top:8px ;
    margin-bottom:8px ;
`;
export const BtnAdd = styled.button`
    width:160px;
    height:42px ;
    background-color: #00A3FF; 
    font-size:15pt ;
    color: #fff;
    cursor: pointer;
    border:1px solid ${props => props.selected ? '#fff' : '#00A3FF'};
    border-radius:5px ;
    box-shadow:  0px 1px 3px 1px ${props => props.selected ? '#428651' : '#00A3FF'};
`;
