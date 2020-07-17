import React, {useContext, useEffect, useRef} from "react";
import styled, {keyframes} from 'styled-components'
import {StoreContext} from "../../store/context";
import {Input} from "../Input/Input";
import {ITodoList} from "../../store/Interface";
import {CHANGE_COMPLETION} from "../../store/actions";

const Container = styled.div`
  box-sizing: border-box;
  position:absolute;
  display:flex;
  top: 50%;
  left: 50%;
  align-items: center;
  transform: translate(-50%, 50%);
  flex-direction: column;
  width: 400px;
  height: 468px;
  padding: 0 40px 40px 40px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
`;

const ListWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const List = styled.ul`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 230px;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
    &::-webkit-scrollbar {
  width: 5px;
  margin-left: 20px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
`;

const xTransform = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5%);
  }
  90% {
    transform: translateX(2%);
  }
  to {
  opacity: 1;
    transform: translateX(0%);
  }
`;

const Item = styled.li`
  box-sizing: border-box;
  display:flex;
  justify-content: space-between;
  position:relative;
  width: 300px;
  padding: 10px;
  font-size: 18px;
  animation: .3s ${xTransform} ;
  
  p {
    position:relative;
    display: inline-block;
    margin: 0;
    color: ${(props : {isDone: boolean}) => props.isDone ? '#aeaeaf' : '#000'};
    word-break: break-word;
    
    &:after {
        content: '';
        position: absolute;
        opacity: ${(props: { isDone: boolean }) => props.isDone ? '1' : '0'};
        visibility: ${(props: { isDone: boolean }) => props.isDone ? 'visible' : 'hidden'};
        width: 120%;
        height: 2px;
        background:#aeaeaf;
        top: 50%;
        left: -10%;
        transform-origin: left;
        transform: translate(0, -50%) scaleX(${(props: { isDone: boolean }) => props.isDone ? '1' : '0'});
        transition:all .2s; 
   }
  }
  
   
  &:not(:first-child) {
    border-top: 2px solid #eaebee;
  }
`;


const Todo: React.FC = () => {
    const {state, dispatch} = useContext(StoreContext);
    const list = useRef<HTMLUListElement>(null);
    useEffect(() => {
        if (list && list.current) {
            list.current.scrollTop = list.current.scrollHeight;
        }
    }, [state])

    return (
        <Container>
            <h1>Todos</h1>
            <ListWrapper>
                <List ref={list}>
                    {state.todoList.map((item: ITodoList) =>
                        <Item
                            key={item.id}
                            isDone={item.isDone}
                            onClick={() => dispatch({type: CHANGE_COMPLETION, payload: {id: item.id, value: item.value, isDone: item.isDone}})}
                        >
                            <p>{item.value}</p>
                            {item.isDone ? <span role="img">✅</span> : false}
                        </Item>)}
                </List>
                <Input/>
                <div>
                    <button type={"button"}></button>
                    <button type={"button"}></button>
                    <button type={"button"}></button>
                </div>
            </ListWrapper>
        </Container>
    )
};

export default Todo;
