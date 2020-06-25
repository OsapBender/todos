import React, {useContext, useRef, useState} from "react";
import styled from "styled-components";
import {StoreContext} from "../../store/context";
import {ADD_TODO} from "../../store/actions";

const Container = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items: center;
  margin: 40px 0;
  width: 100%;
  height: 70px;
`;

const InputText = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  background:#eaebee;
  outline: none;
  font-size: 18px;
  
  &:focus {
    border: 3px solid #eaebee;
    background: #fff;
  }
`;

const Button = styled.button`
<<<<<<< HEAD
  opacity: ${(props: { isTyping: boolean }) => props.isTyping ? '1' : '0'};
  visibility: ${(props) => props.isTyping ? 'visible' : 'hidden'};
  position: relative;
  min-width: 60px; 
=======
  position: absolute;
  right: 0;
  width: 60px; 
>>>>>>> dac52fc289f592bcaf518bb6eff2c7fa135d205c
  height: 60px;
  background:#38b570;
  padding: 0;
  border: none;
  border-radius: 50%;
  outline: none;
  transition: all .3s;
  opacity: ${(props: { isTyping: boolean }) => props.isTyping ? '1' : '0'};
  visibility: ${(props) => props.isTyping ? 'visible' : 'hidden'};
  transform: ${(props) => props.isTyping ? 'rotate(0deg) scale(1)' : 'rotate(-45deg) scale(0)'} translateX(-10px);
  
  
  &:before, &:after {
    content: '';
    position:absolute;
    height: 7px;
    width: 30px;
    background: #fff;
  }
  
  &:after {
    left: 16px;
    top: 27px;
    transform: rotate(90deg);
  }
  &:before {
    left: 16px;
    top: 27px;
  }
  
  &:hover, &:focus {
    transform: scale(1.1) translate(-10px);
  }
`;

export const Input: React.FC = () => {
    const [isText, setText] = useState('');
    const {dispatch} = useContext(StoreContext);

    return (
        <Container>
            <InputText onChange={(e) => {
                setText(e.target.value)
            }} type={'text'}/>
            <Button isTyping={!!isText} onClick={() => {
                dispatch({type: ADD_TODO, value: isText})
            }}/>
        </Container>
    );
};

