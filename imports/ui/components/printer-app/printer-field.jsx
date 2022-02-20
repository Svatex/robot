import React from 'react';
import styled from "styled-components";


const PrintField = ({children, fieldColor }) => {
    return (
        <FieldWrapper fieldColor={fieldColor}>{children}</FieldWrapper>
    )

}
export default PrintField

const FieldWrapper = styled.div`
  border-radius: 5px;
  width: 75px;
  text-align: center;
  border: 1px black solid;
  margin: 5px;
  background-color: ${({ fieldColor }) => fieldColor};
`
