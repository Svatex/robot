import React from 'react';
import {Field} from "formik";
import styled from "styled-components";

const FormInput = ({name, placeholder, errors, touched}) => {
    return (
        <>
            <CustomLabel htmlFor={name}>Start Number</CustomLabel>
            <CustomField
                id={name}
                name={name}
                type="number"
                placeholder={placeholder}
            />
            {errors[name] && touched[name]
                && <ErrorText>{errors[name]}</ErrorText>
            }
        </>
    )

}
export default FormInput


const ErrorText = styled.div`
  font-size:12px;
  color: red;
  margin-bottom: 10px;
`

const CustomLabel = styled.label`
  margin-bottom: 5px;
`

const CustomField = styled(Field)`
  padding: 8px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`
