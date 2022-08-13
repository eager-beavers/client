import React, {useState} from 'react';
import {Card} from "antd";
import {Calendar} from "../../../component/common";

const CalendarContainer = () => {

    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const TestButton = () => {
        console.log(123)
    }

    return (
        <Card title={`${year}년 ${month}월 영업일`} className={"h-full overflow-y-scroll"}>
            <button onClick={TestButton}>TEST</button>
            <Calendar setYear={setYear} setMonth={setMonth}/>
        </Card>
    )
};

export default CalendarContainer;