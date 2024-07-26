import React from "react";
import styled from "styled-components";

const NextButton = ({ onClick }) => {
  return <Button onClick={onClick}>다음</Button>;
};

export default NextButton;

const Button = styled.button`
  width: 80%;
  max-width: 400px;
  height: 50px;
  padding: 15px;
  margin-top: 15px;
  color: white;
  background-color: #d9d9d9;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
