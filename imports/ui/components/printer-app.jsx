import React, {useState} from 'react';
import styled from 'styled-components';
import {Form, Formik} from 'formik';
import * as Yup from "yup";
import PrintField from "./printer-app/printer-field";
import FormInput from "./printer-app/form-input";

const validationSchema = Yup.object().shape({
    startNum: Yup
        .number("Must be a number")
        .integer("Must be and integer")
        .min(1, "Must be bigger than 0")
        .required("Required"),
    endNum: Yup
        .number("Must be a number")
        .integer("Must be and integer")
        .min(1, "Must be bigger than 1")
        .required("Required"),
});


const PrinterApp = () => {
    const [startNum, setStartNum] = useState(1)
    const [endNum, setEndNum] = useState(100)

    const numberArray = Array.from({length: endNum - startNum}, (_x, i) => i + startNum)

    const handleSubmit = (values) => {
        setEndNum(values.endNum + 1)
        setStartNum(values.startNum)
    }

    return (
        <PrinterWrapper>
            <Formik
                initialValues={{
                    startNum: 1,
                    endNum: 100
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {({errors, touched}) => (
                    <CustomForm>
                        <FormInput
                            name="startNum"
                            errors={errors}
                            touched={touched}
                            placeholder="Starting number"
                        />
                        <FormInput
                            name="endNum"
                            errors={errors}
                            touched={touched}
                            placeholder="Last number"
                        />
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </CustomForm>
                )}
            </Formik>
            <NumbersAndRobots>
                {numberArray.map((num) => {
                    if (num % 5 === 0 && num % 3 === 0) return <PrintField fieldColor="#e76f51">robotICT</PrintField>
                    if (num % 3 === 0) return <PrintField fieldColor="#f4a261">Robot</PrintField>
                    if (num % 5 === 0) return <PrintField fieldColor="#e9c46a">ICT</PrintField>
                    return <PrintField>{num}</PrintField>
                })}
            </NumbersAndRobots>
        </PrinterWrapper>
    )

}
export default PrinterApp

const PrinterWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const ErrorText = styled.div`
  font-size: 9px;
  color: red;
`

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 50px auto 20px auto;
`

const NumbersAndRobots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 25px auto 0 auto;
`

// Button style copied from https://getcssscan.com/css-buttons-examples
const SubmitButton = styled.button`
  align-items: center;
  background-color: #2a9d8f;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform .2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    transform: translate(0, 0);
  }

  &:active {
    background-color: #264653;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
      padding: 0 40px;
  }
`

