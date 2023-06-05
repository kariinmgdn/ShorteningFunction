function shortening(value, valueUnit) {
    const allowedValueUnits = ["", "K", "M", "bn", "T"];

    if (!value || typeof value !== "number" || valueUnit && !allowedValueUnits.includes(valueUnit)) {
        valueUnit = valueUnit ? valueUnit : "";
        return {value: value, valueUnit: valueUnit};
    } else {
        if (!valueUnit && valueUnit !== "") {
            const unit = String(value).split(".")[0].length;
            valueUnit = unit <= 6 ? "K" : unit <= 9 ? "M" : unit <= 12 ? "bn" : "T";
        }

        switch (valueUnit) {
            case "K":
                value /= 10 ** 3;
                break;
            case "M":
                value /= 10 ** 6;
                break;
            case "bn":
                value /= 10 ** 9;
                break;
            case "T":
                value /= 10 ** 12;
                break;
        }
        return {value: value, valueUnit: valueUnit};
    }
}

module.exports = shortening;