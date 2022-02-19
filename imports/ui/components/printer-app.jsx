import React, {useState} from 'react';
import styled from 'styled-components';
import {Form, Formik, Field} from 'formik';
import * as Yup from "yup";

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
                        <label htmlFor="startNum">Start Number</label>
                        <Field
                            id="startNum"
                            name="startNum"
                            type="number"
                            placeholder="First number"
                        />
                        {errors.startNum && touched.startNum
                            && <ErrorText>{errors.startNum}</ErrorText>
                        }
                        <label htmlFor="endNum">End Number</label>
                        <Field
                            id="endNum"
                            name="endNum"
                            type="number"
                            placeholder="Last number"

                        />
                        {errors.endNum && touched.endNum
                            && <div>{errors.endNum}</div>
                        }
                        <button type="submit">Submit</button>
                    </CustomForm>
                )}
            </Formik>
            <NumbersAndRobots>
                {numberArray.map((num) => {
                    if (num % 5 === 0 && num % 3 === 0) return <PrintedField>robotICT</PrintedField>
                    if (num % 3 === 0) return <PrintedField>Robot</PrintedField>
                    if (num % 5 === 0) return <PrintedField>ICT</PrintedField>
                    return <PrintedField>{num}</PrintedField>
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
`

const ErrorText = styled.div`
  font-size: 9px;
  color: red;
`

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 50px auto 20px auto;
`

const NumbersAndRobots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const PrintedField = styled.p`
  width: 75px;
  text-align: center;
  border: 1px black solid;
  margin: 5px;
`
