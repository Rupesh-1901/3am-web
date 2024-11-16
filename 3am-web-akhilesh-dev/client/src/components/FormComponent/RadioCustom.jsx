import styled from "styled-components";
import RadioButton from "./RadioGroupInput/RadioButton";

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin:21px 7px;
`;

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  flex-grow: 1;
  gap: 1rem;
  
`;

const RadioCustom = (props) => {
  const { value ,options, onChange,errorsParam,touchedParam,inputName }=props
  function renderOptions() {
    return options.map(({ label, name, disabled }, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, "");
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <div style={{    display: "flex",
          alignItems: "center", 
      }}>
        <RadioButton
        {...props}
        value={value}
        key={optionId}
        id={optionId}
        name={name}
        disabled={disabled}
        defaultChecked={index === 0}
        onChange={onChange}
        
        />
         <label htmlFor={optionId} className='label-custom'>{label}</label>
        </div>
      );
    });
  }
  return (
    <div className="radioCust">
     
    <Fieldset>
      <Wrapper>{renderOptions()}</Wrapper>
    </Fieldset>
    {errorsParam && touchedParam ? (
          <p className="form-error">{errorsParam}</p>
          ) : null}
    </div>
  );
};
export { RadioCustom };
