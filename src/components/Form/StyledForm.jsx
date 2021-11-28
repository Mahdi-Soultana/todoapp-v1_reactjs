import styled from "styled-components";
export const FormStyled = styled.form`
  flex-direction: column;

  &,
  div,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    input,
    button {
      display: inline-block;
      border: 1px black solid;
      padding: 1rem 2rem;
      font-size: 1.7rem;
      font-family: inherit;
      font-weight: bold;
      color: #333333;
    }
  }
  span {
    background: ${(p) =>
      p.type === "success" ? "green" : p.type == "warning" ? "#eec71c" : "red"};
    color: white;
    padding: 1rem 3rem;
    margin: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    top: ${(p) => (p.show ? "0" : "-20rem")};
    text-transform: capitalize;
    text-shadow: 0 0 2px #333;
    box-shadow: 0 0 2px #333;
  }
  div,
  div input {
    width: 60%;
  }
  div button {
    background-color: ${(p) => (p.edit ? "green" : "#333")};
    width: 140px;
    color: white;
  }
  h3 {
    font-size: 3rem;
    font-style: italic;
    margin-bottom: 2rem;
  }
  background-color: white;
`;
