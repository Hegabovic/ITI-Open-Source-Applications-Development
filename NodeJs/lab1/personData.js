let personDate = function personData(name, date) {
    let currentYear = new Date();
    currentYear.getFullYear()
    if (isNaN(name)) {
        let age = currentYear.getFullYear() - date;
        return `Hello ${name} and your age now ${age}`;
    }
}

// console.log(personData("Hegabovic",1995))

module.exports = personDate