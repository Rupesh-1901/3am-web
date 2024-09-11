import styled from "styled-components";
import Ticks from "../../../Assets/Ticks.svg";
export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  color: #555555;
  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    color: blue!important;
  `}
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: 0.5px solid #ffffff;
  background: #eeeeee;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  border-radius: 50%;
  ::after {
    content: "";
    border: 0.5px solid #ffffff;
    display: block;
    border-radius: 50%;
    width: 13px;
    height: 13px;
  }
  :checked {
    ::after {
      background-color: #1296b0;
    }
    :hover {
      border: 1px solid #1296b038;
      ::after {
        background-color: 1296b0;
      }
    }
  }
  :focus {
    background: #1296b0;
  }
  :hover {
    ::after {
      background-color: 1296b0;
      border: 1px solid #1296b038;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06);
    }
  }
`;
export const CheckBox = styled.input`

   accent-color: #1296b0;
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  background: #FFFFFF;
  cursor:pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  :checked:before{
    }
    :hover {
      border: 1px solid #1296b038;
      ::after {
       
      }
    }
  }
  :checked {
    background-color: #1296b0;
    
    ::after {
      font-size: 15px;
      line-height: 0.4;
      color: #fff;
      
    }
  }
  
`;
export const YesNo = styled.input`
 -webkit-appearance: none;
 cursor:pointer;
   accent-color: #1296b0;
  width: 18px;
  height: 18px;
  background: #FFFFFF;
  border: 0.75px solid #BFBFBF;
  border-radius: 50%;
    :hover {
      border: 1px solid #1296b038;
      ::after {
       
      }
    }
  }
  :checked {
    background-color: #1296b0;
    
    ::after {
      content:'✔'; 
      font-size: 16px;
      line-height: 0.4;
      color: #fff;
      
    }
  }
  
`;
