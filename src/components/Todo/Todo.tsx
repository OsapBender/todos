import React, {useContext} from "react";
import styled, {keyframes} from 'styled-components'
import {StoreContext} from "../../store/context";
import {Input} from "../Input/Input";

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

const Fact = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  
`;

const List = styled.ul`
  position: absolute;
  display:flex;
  flex-direction: column;
  width: 100%;
  overflow: visible;
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
  width: 100%;
  padding: 10px;
  animation: 1s ${xTransform} ;
   
  &:not(:first-child) {
    border-top: 2px solid #eaebee;
  }
`;


const Todo: React.FC = () => {
    const {state} = useContext(StoreContext);

    return (
        <Container>
            <h1>Todos</h1>
            <ListWrapper>
                <Fact>
                    <List>
                        {state.todoList.map((item: String, idx) => <Item key={idx}>{item}</Item>)}
                    </List>
                </Fact>
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
