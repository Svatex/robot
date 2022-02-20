import React, {useState} from 'react';
import styled from 'styled-components';
import {Form, Formik} from 'formik';
import FormInput from "./printer-app/form-input";
import {colors} from "../../../src/catalogs/colors-catalog";
import {robotValidation} from "../../../src/utils/validation/robot-printer";
import {ArrayPrinter} from "../../../src/utils/array-printer";

const PrinterApp = () => {
    const [startNum, setStartNum] = useState(1)
    const [endNum, setEndNum] = useState(100)

    /** create new array with length calculated based on given numbers */
    const numberArray = Array.from({length: endNum - startNum}, (_x, i) => i + startNum)

    /** setNumbers */
    const handleSubmit = (values) => {
        setEndNum(values.endNum + 1)
        setStartNum(values.startNum)
    }

    return (
        <PrinterWrapper>
            <Heading>ROBOT PRINTER 🤖</Heading>
            <Formik
                initialValues={{
                   startNum: 1,
                    endNum: 100
                }}
                validationSchema={robotValidation}
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
                {ArrayPrinter(numberArray)}
            </NumbersAndRobots>
        </PrinterWrapper>
    )

}
export default PrinterApp

const Heading = styled.p`
    font-size: 36px;
  margin-top: 20px;
`

const PrinterWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
  background-color:  ${colors.turquoise};
  border: 2px solid ${colors.black};
  border-radius: 8px;
  box-sizing: border-box;
  color:  ${colors.white};
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
  margin-top:10px;
  
  &:after {
    background-color: ${colors.black};
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
    background-color: ${colors.darkBlue};
    outline: 0;
  }

  &:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
      padding: 0 40px;
  }
`

