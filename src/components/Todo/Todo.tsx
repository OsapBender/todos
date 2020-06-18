import React, {useContext} from "react";
import styled from 'styled-components'
import {StoreContext} from "../../store/context";

const Container = styled.div`
  position:absolute;
  display:flex;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: space-between;
  transform: translate(-50%, 50%);
  flex-direction: column;
  width: 400px;
  height: 468px;
  padding: 0 20px 20px 20px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
`;

const ListWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const List = styled.ul`
  position:relative;
  display:flex;
  flex-direction: column;
  width: 100%;
`;

const Item = styled.li`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #888;
  padding: 10px 20px;
`;

const Todo: React.FC = () => {
    const {state} = useContext(StoreContext)
    console.log(state)

    return (
        <Container>
            <h1>Todos</h1>
            <ListWrapper>
                <List>
                    <Item>Hey</Item>
                </List>
                <input type="text"/>
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