import create from "zustand";
import BusinessDateModel from "../model/BusinessDateModel";
import {cloneDeep, isNil} from "lodash";

interface BusinessDayStore {
    dateList: Array<BusinessDateModel>;
    selectedDateList: Array<BusinessDateModel>;
    initializeDateList: () => void;
    updateDateList: () => void;
    changeBusinessDayState: (businessDayState: string) => void;
    checkedDate: (checkedDate: BusinessDateModel) => void;
    unCheckedDate: (unCheckedDate: number) => void;
}

export const BusinessDayStore = create<BusinessDayStore>(set => ({
    //현재 선택된 Month의 각 Date 정보
    dateList: [],

    //변경을 위해 선택된 Date 정보
    selectedDateList: [],

    initializeDateList: () => {
        set((state) => ({
            dateList: [],
            selectedDateList: []
        }))
    },

    updateDateList: () => {
        set((state) => ({
            dateList: state.selectedDateList.map(selectedDate => {
                const updatedDate = state.dateList.find(curDate => curDate.date === selectedDate.date);

                if (!isNil(updatedDate)) {
                    let changedDate = state.dateList.find(curDate => curDate.date === selectedDate.date);

                    //Update 성공
                    if (!isNil(changedDate)) {
                        console.log(changedDate.state)
                        console.log(selectedDate.state)
                        changedDate.state = selectedDate.state;
                        return changedDate;
                    }

                    //Update 실패
                    return updatedDate;
                } else {
                    return selectedDate;
                }
            })
        }))
    },

    changeBusinessDayState: (businessDayState: string) => {
        set((state) => ({
            selectedDateList: state.selectedDateList.map(selectedDate => {
                let updatedDate = cloneDeep(selectedDate);
                updatedDate.state = businessDayState;
                return updatedDate;
            })
        }))
    },

    checkedDate: (checkedDate: BusinessDateModel) => {
        set((state) => ({
            selectedDateList: [...state.selectedDateList, checkedDate]
        }))
    },

    unCheckedDate: (unCheckedDate: number) => {
        set((state) => ({
            selectedDateList: state.selectedDateList.filter(checkedDate => checkedDate.date !== unCheckedDate)
        }))
    }
}))