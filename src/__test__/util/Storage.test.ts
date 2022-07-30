import {getCookie, setCookie, setLocalStorage, setSessionStorage} from "../../util/Storage";

const TestStringKey = "TEST_STRING_KEY";
const TestStringValue = "TEST_VALUE";

const TestNumberKey = "TEST_NUMBER_KEY"
const TestNumberValue = 90;

test("Cookie Util Test", () => {
    setCookie(TestStringKey, TestStringValue);
    setCookie(TestNumberKey, TestNumberValue);

    const stringValue = getCookie(TestStringKey);
    const numberValue = Number(getCookie(TestNumberKey));

    expect(stringValue).toEqual(TestStringValue);
    expect(numberValue).toEqual(TestNumberValue);
})

test("LocalStorage Util Test", () => {
    setLocalStorage(TestStringKey, TestStringValue);
    setLocalStorage(TestNumberKey, TestNumberValue);

    const stringValue = getCookie(TestStringKey);
    const numberValue = Number(getCookie(TestNumberKey));

    expect(stringValue).toEqual(TestStringValue);
    expect(numberValue).toEqual(TestNumberValue);
})

test("SessionStorage Util Test", () => {
    setSessionStorage(TestStringKey, TestStringValue);
    setSessionStorage(TestNumberKey, TestNumberValue);

    const stringValue = getCookie(TestStringKey);
    const numberValue = Number(getCookie(TestNumberKey));

    expect(stringValue).toEqual(TestStringValue);
    expect(numberValue).toEqual(TestNumberValue);
})