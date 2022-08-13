import React from 'react';
import {Calendar as AntCalendar} from 'antd';
import {DateCell, MonthCell} from "./CustomCell";
import type {Moment} from 'moment';
import "./style.css";

interface CalendarProps {
    setYear: Function;
    setMonth: Function
}

const Calendar = (props: CalendarProps) => {

    const {setYear, setMonth} = props;

    // const onPanelChange = (value: Moment, mode: CalendarMode) => {
    //     console.log(value.format('YYYY-MM-DD'), mode);
    //     console.log(value);
    // };

    const onChangeDate = (value: Moment) => {
        setMonth(new Date(value.format()).getMonth() + 1);
        setYear(new Date(value.format()).getFullYear());
    }

    return (
        <AntCalendar
            monthCellRender={MonthCell}
            dateCellRender={DateCell}
            // headerRender={HeaderCell}
            fullscreen={true}

            // onPanelChange={onPanelChange}
            onChange={onChangeDate}
        />
    )
};

export default Calendar;