import React from 'react';
import styled from 'styled-components';

const PrinterApp = () => {
    const startNumber = 5;
    const endNumber = 100;

    const numberArray = Array.from({length: endNumber - startNumber}, (_x, i) => i+startNumber)

    return (
        <PrinterWrapper>
            {numberArray.map((num)=>{
                if (num%5 === 0 && num%3 === 0) return  "robotICT "
                if (num%3 === 0) return  "Robot "
                if (num%5 === 0) return  "ICT "
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
