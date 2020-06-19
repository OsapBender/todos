import React, {useRef, useState} from "react";
import styled from "styled-components";

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
  opacity: ${(props: { isTyping: boolean }) => {
    console.log(props.isTyping)
    return props.isTyping ? '1' : '0'
}};
  visibility: ${(props) => props.isTyping ? 'visible' : 'hidden'};
  position: relative;
  min-width: 60px; 
  height: 60px;
  background:#38b570;
  padding: 0;
  border: none;
  border-radius: 50%;
  outline: none;
  transform: translateX(-10px);
  transition: all .2s;
  
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


    return (
        <Container>
            <InputText onChange={(e) => {
                setText(e.target.value)
            }} type={'text'}/>
            <Button isTyping={!!isText}/>
        </Container>
    );
};

