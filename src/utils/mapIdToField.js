/* eslint-disable no-console */
const mapIdToField = (field, array) => {
    const filteredArray = array.filter((element) => element.id === field);
    if (filteredArray.length !== 1) {
        throw new Error("There is a problem with the number of fields");
    }
    return filteredArray[0].value;
};

module.exports = mapIdToField;
