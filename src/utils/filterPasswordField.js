const filterPasswordField = (input) => {
    const filteredInput = input.filter((element) => element.id !== "password");
    return filteredInput;
};

module.exports = filterPasswordField;
