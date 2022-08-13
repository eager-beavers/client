export const trimHourMinSecMilli = (time: string | number | Date) => {
    return new Date(new Date(new Date(new Date(new Date(time).setHours(0)).setMinutes(0)).setSeconds(0)).setMilliseconds(0)).getTime();
}

export const trimDateHourMinSecMilli = (time: string | number | Date) => {
    return new Date(new Date(new Date(new Date(new Date(new Date(time).setDate(0)).setHours(0)).setMinutes(0)).setSeconds(0)).setMilliseconds(0)).getTime();
}