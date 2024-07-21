import NextButton from "../../components/onboarding/NextButton";
import styled from "styled-components";
import React from "react";
import PersonalInfoForm from "../../components/onboarding/PersonalInfoForm";

const PersonalInfo = () => {
  return (
    <PersonalInfoContainer>
      <WelcomeMessage>
        아띠 멤버가 되신 것을 <br />
        환영합니다!
      </WelcomeMessage>
      <PersonalInfoForm />
      <NextButton />
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeMessage = styled.div`
  font-weight: 500;
  font-size: 18px;
  white-space: pre-line;
  margin-bottom: 27px;
`;