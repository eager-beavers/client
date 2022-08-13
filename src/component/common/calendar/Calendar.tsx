import React, {useEffect, useState} from 'react';
import {Button, Calendar as AntCalendar, Checkbox, Select} from 'antd';
import {MonthCell} from "./CustomCell";
import type {Moment} from 'moment';
import "./style.css";
import {trimDateHourMinSecMilli, trimHourMinSecMilli} from "../../../util/Time";
import {BusinessDayStore} from "../../../store/BusinessDayStore";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import BusinessDateModel from "../../../model/BusinessDateModel";
import {isNil} from "lodash";

interface CalendarProps {
    setYear: Function;
    setMonth: Function
}

const Calendar = (props: CalendarProps) => {

    const {
        dateList,
        selectedDateList,
        checkedDate,
        unCheckedDate,
        initializeDateList,
        updateDateList,
        changeBusinessDayState
    } = BusinessDayStore();

    const {setYear, setMonth} = props;
    const [selectedState, setSelectedState] = useState("businessDay");
    const [curDate, setCurDate] = useState(trimHourMinSecMilli(new Date()));
    const [update, setUpdate] = useState(true);
    const [allChecked, setAllChecked] = useState(false);
    const {Option} = Select;

    const onChangeDate = (value: Moment) => {
        setMonth(new Date(value.format()).getMonth() + 1);
        setYear(new Date(value.format()).getFullYear());
    }

    const onChangeState = (value: string) => {
        setSelectedState(value);
    }

    const onClickSave = () => {
        updateDateList();
    }

    const onChangeAllCheck = (e: CheckboxChangeEvent) => {
        setAllChecked(e.target.checked);
    }

    useEffect(() => {
        changeBusinessDayState(selectedState);
    }, [selectedState])

    useEffect(() => {
        initializeDateList();
        setUpdate(prev => !prev);
    }, [curDate])

    const DateCell = (date: Moment) => {
        const [businessDayState, setBusinessDayState] = useState(
            !isNil(dateList.find(storeDate => storeDate.date === trimHourMinSecMilli(date.format()))) ?
                dateList.find(storeDate => storeDate.date === trimHourMinSecMilli(date.format()))?.state
                :
                "notBusinessDay"
        );
        const [check, setCheck] = useState(false);

        useEffect(() => {
            setCurDate(trimHourMinSecMilli(date.format()));
            setBusinessDayState("notBusinessDay");
            setCheck(false);
        }, [trimDateHourMinSecMilli(date.format())])

        useEffect(() => {
            setCheck(allChecked);
            allChecked ?
                checkedDate(new BusinessDateModel(trimHourMinSecMilli(date.format()), selectedState))
                :
                unCheckedDate(trimHourMinSecMilli(date.format()));
        }, [allChecked])

        useEffect(() => {
            const findDate = dateList.find(storeDate => storeDate.date === trimHourMinSecMilli(date.format()));
            if (!isNil(findDate)) {
                setBusinessDayState(findDate.state);
            }
        }, [dateList.find(storeDate => storeDate.date === trimHourMinSecMilli(date.format()))?.state])

        const onChange = (e: CheckboxChangeEvent) => {
            setCheck(e.target.checked);
            e.target.checked ?
                checkedDate(new BusinessDateModel(trimHourMinSecMilli(date.format()), selectedState))
                :
                unCheckedDate(trimHourMinSecMilli(date.format()));
        }

        //
        // useEffect(() => {
        //
        // }, [update])


        const stateColor = (state: string) => {
            switch (state) {
                case "businessDay":
                    return "text-lime-500";
                case "notBusinessDay":
                    return "text-rose-500";
                default:
                    return "text-black";
            }
        }

        return (
            <div>
                <Checkbox checked={check} onChange={onChange}>
                    <span
                        className={`${stateColor(businessDayState)}`}>{businessDayState === "businessDay" ? "영업일" : "비영업일"}</span>
                </Checkbox>
            </div>
        )
    };

    return (
        <div>
            <div className={"flex"}>
                <div className={"ml-auto"}>
                    <Checkbox onChange={onChangeAllCheck}>전체 선택</Checkbox>
                    <Select className={"mr-1"} defaultValue={selectedState} onChange={onChangeState}>
                        <Option value="businessDay">영업일</Option>
                        <Option value="notBusinessDay">비영업일</Option>
                    </Select>
                    <Button onClick={onClickSave}>Save</Button>
                </div>
            </div>
            <AntCalendar
                monthCellRender={MonthCell}
                dateCellRender={DateCell}
                fullscreen={true}
                onChange={onChangeDate}
            />
        </div>
    )
};

export default Calendar;