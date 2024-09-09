import { Layout } from "../../components/Layout/Layout";
import { StyledH1, StyledDiv, StyledP, StyledForm, StyledInput, StyledTaskItem, StyledLabel, StyledIconButton } from "./Lista.style"; // Importe o novo StyledIconButton
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Lista() {
  const [list, setList] = useState<string>("");
  const [lists, setLists] = useState<string[]>([]);
 
  const addList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (list.trim() !== "") {
      setLists([...lists, list]);
      setList("");
    }
  };
 
  return (
    <>
      <Layout>
        <StyledH1>Nova Lista</StyledH1>
        <StyledDiv>
          <StyledP>Adicionar item</StyledP>
          <StyledForm onSubmit={addList}>
            <StyledInput type="text" placeholder="Digite o item desejado" value={list} onChange={(e) => setList(e.target.value)} required />
            <StyledIconButton type="submit" id="new-task" className="add">
              <AiOutlinePlusCircle />
            </StyledIconButton>
          </StyledForm>
          <ul id="todo-list">
            {lists.map((list, index) => (
              <StyledTaskItem key={index}>
                <input type="radio" id={`list-${index}`} name="list" />
                <StyledLabel htmlFor={`list-${index}`}>{list}</StyledLabel>
              </StyledTaskItem>
            ))}
          </ul>
        </StyledDiv>
      </Layout>
    </>
  );
}
