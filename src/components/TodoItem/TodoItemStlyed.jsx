import styled from "styled-components";
export const TodoItemStyled = styled.li`
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
  margin: 1rem auto;

  border-bottom: #333 solid 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: #1a1a1a;
    span {
      margin: 0 1rem 0 0;
      font-size: 2rem;
    }
  }
  button {
    display: inline-block;
    border: 1px black solid;
    padding: 0.5rem;
    font-size: 1.4rem;
    font-family: inherit;
    font-weight: bold;
    color: #333;
    width: 60px;
    cursor: pointer;
    &:first-of-type {
      margin: 0 1rem 0 0;
    }
  }
`;
