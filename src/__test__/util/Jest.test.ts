import {transformNumberDataTypeToString, transformStringDataTypeToNumber} from "../../util/Jest";

test("Jest Test", () => {
    const testNumber = 10;
    const testString = "Test String!";

    expect(testNumber).toEqual(10);
    expect(testString).not.toEqual("Hello String!");

    expect(typeof transformNumberDataTypeToString(testNumber)).toEqual(typeof testString);
    expect(typeof transformStringDataTypeToNumber(testString)).toEqual(typeof testNumber);
})