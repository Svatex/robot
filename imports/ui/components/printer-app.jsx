import React, {useState} from 'react';
import styled from 'styled-components';

const PrinterApp = () => {
    const [startNum, setStartNum] = useState(1)
    const [endNum, setEndNum] = useState(100)

    const numberArray = Array.from({length: endNum - startNum}, (_x, i) => i + startNum)

    return (
        <PrinterWrapper>
<input/>
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
