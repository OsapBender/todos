import React, {ReactNode, useContext, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {StoreContext} from "../../store/context";
import {ADD_TODO} from "../../store/actions";

const Container = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  height: 70px;
`;

const InputText = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 40px 0px 10px;
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
  opacity: ${(props: { isTyping: boolean }) => props.isTyping ? '1' : '0'};
  visibility: ${(props) => props.isTyping ? 'visible' : 'hidden'};
  min-width: 60px; 
  position: absolute;
  right: 0;
  width: 60px; 
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

export const Input = ({ current } : { current: HTMLUListElement | null}) => {
    console.log(current)
    const [isText, setText] = useState('');
    const [isCooldown, setCooldown] = useState(true);
    const {state, dispatch} = useContext(StoreContext);
    const input = useRef<HTMLInputElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, current: HTMLUListElement | null): void => {
        if (current) {
            current.scrollTop = current.scrollHeight;
        }
    }

    useEffect(() => {
        if (input && input.current) {
            input.current.focus()
        }
    }, [])

    return (
        <Container>
            <InputText ref={input} onChange={(e) => {
                setText(e.target.value)
            }} type={'text'}/>
            <Button isTyping={!!isText} onClick={(e) => {
                if (isCooldown) {
                    dispatch({type: ADD_TODO, payload: {value: isText, id: state.numberOfCases, isDone: false}});
                    setCooldown(false);
                    setTimeout(() => handleClick(e, current), 0);
                }
                setTimeout(() => setCooldown(true), 300)
            }}/>
        </Container>
    );
};

