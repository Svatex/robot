import React from 'react';
import PrintField from "../../imports/ui/components/printer-app/printer-field";
import {colors} from "../catalogs/colors-catalog";
import {printerWords} from "../catalogs/printer-words";

/** returns number or word for every element in array, if condition is met **/
export const ArrayPrinter = (array) => {
    return array.map((num) => {
        if (num % 5 === 0 && num % 3 === 0) {
            return (
                <PrintField key={num} fieldColor={colors.orange}>
                    {printerWords.RobotICT}
                </PrintField>
            )
        }
        if (num % 3 === 0) {
            return (
                <PrintField key={num} fieldColor={colors.lightOrange}>
                    {printerWords.Robot}
                </PrintField>

            )
        }
        if (num % 5 === 0) {
            return (
                <PrintField key={num} fieldColor={colors.yellow}>
                    {printerWords.ICT}
                </PrintField>
            )
        }
        return <PrintField key={num}>{num}</PrintField>
    })

}
