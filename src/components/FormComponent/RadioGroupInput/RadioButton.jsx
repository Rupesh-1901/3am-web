import styled from "styled-components";
import { Label, Radio } from "./InputStyles";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RadioButton = (props) => {
  // useEffect(()=>{
  //   document.title = `PeopleSol - Radio Button`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })
  const { label, id, disabled,onChange,  }=props
  return (
    <Wrapper>
      <Radio id={id} type="radio" disabled={disabled} {...props} onChange={onChange} />
      <Label htmlFor={id} disabled={disabled}>
        <span>{label}</span>
    
      </Label>
    </Wrapper>
  );
};

export default RadioButton;
