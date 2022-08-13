import React, {useState} from 'react';
import {Checkbox} from "antd";

// @ts-ignore
const DateCell = (date) => {

    const current = date.clone();
    const localeData = date.localeData();

    console.log(current);
    console.log(localeData);

    const [businessDayState, setBusinessDayState] = useState("영업일");

    const stateColor = (state: string) => {
        switch (state) {
            case "영업일":
                return "text-lime-500";
            case "비영업일":
                return "text-rose-500";
            default:
                return "text-black";
        }
    }

    return (
        <div>
            <Checkbox>
                <span className={`${stateColor(businessDayState)}`}>{businessDayState}</span>
            </Checkbox>
        </div>
    )
};

export default DateCell;