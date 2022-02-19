import React, {useState} from 'react';
import styled from 'styled-components';
import {Form, Formik, Field} from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    startNum:  Yup
        .number("Must be a number")
        .integer("Must be and integr")
        .min(0, "Must be bigger than 0")
        .required("Required"),
    endNum: Yup
        .number("Must be a number")
        .integer("Must be and integr")
        .min(1, "Must be bigger than 1")
        .required("Required"),
});


const PrinterApp = () => {
    const [startNum, setStartNum] = useState(1)
    const [endNum, setEndNum] = useState(100)

    const numberArray = Array.from({length: endNum - startNum}, (_x, i) => i + startNum)

    const handleSubmit = (values) => {
        console.log(values)
        setEndNum(values.endNum)
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
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name="startNum"
                            type="number"
                        />
                        {errors.startNum && touched.startNum
                            && <ErrorText>{errors.startNum}</ErrorText>
                        }
                        <Field
                            name="endNum"
                            type="number"
                        />
                        {errors.endNum && touched.endNum
                            && <div>{errors.endNum}</div>
                        }
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

            {numberArray.map((num) => {
                if (num % 5 === 0 && num % 3 === 0) return "robotICT "
                if (num % 3 === 0) return "Robot "
                if (num % 5 === 0) return "ICT "
                return num + " "
            })}
        </PrinterWrapper>
    )

}
export default PrinterApp

const PrinterWrapper = styled.div`
  max-width: 1280px;
  background-color: gray;
`

const ErrorText = styled.div`
    color: red;
`
