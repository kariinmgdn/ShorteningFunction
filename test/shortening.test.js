const shortening = require("../src/shortening");

test("should work with all the supported valueUnits", () => {
    const value = 123;
    testShortening(value, 0, "");
    testShortening(value, 3, "K");
    testShortening(value, 6, "M");
    testShortening(value, 9, "bn");
    testShortening(value, 12, "T");
})

const testShortening = (value, power, valueUnit) => {
    expect(shortening(value, valueUnit))
        .toStrictEqual({value: value / 10 ** power, valueUnit: valueUnit});
}

test("should return converted value, if a valid desiredValueUnit is given.", () => {
    testShortening(123, 3, "K");
})

test("should return value and valueUnit as-is, if an invalid desiredValueUnit is passed as a parameter.", () => {
    expect(shortening(1234, "not a real unit"))
        .toStrictEqual({value: 1234, valueUnit: "not a real unit"});
})

test("should return converted value and largest valueUnit which the value has, if the desiredValueUnit is undefined or null.", () => {
    expect(shortening(999999999))
        .toStrictEqual({value: 999.999999, valueUnit: "M"});
})

test("should return value and valueUnit as-is, if the given value itself is invalid.", () => {
    expect(shortening(undefined, "K"))
        .toStrictEqual({value: undefined, valueUnit: "K"});
})

test("should return value as-is and valueUnit as \"\", if the given value itself is invalid and the desiredValueUnit is undefined or null.", () => {
    expect(shortening(undefined))
        .toStrictEqual({value: undefined, valueUnit: ""});
})


