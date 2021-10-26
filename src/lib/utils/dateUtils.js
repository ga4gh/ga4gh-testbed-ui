const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const addLeadingChars = (leadingChar, totalN, string) => {
    return leadingChar.repeat(totalN - string.length) + string;
}

const formatDate = dateString => {
    let d = new Date(dateString);
    return `${days[d.getUTCDay()]},`
        + ` ${months[d.getUTCMonth()]}`
        + ` ${d.getUTCDate()},`
        + ` ${d.getUTCFullYear()}`
        + ` @ ${addLeadingChars("0", 2, d.getUTCHours().toString())}`
        + `:${addLeadingChars("0", 2, d.getUTCMinutes().toString())}`
        + `:${addLeadingChars("0", 2, d.getUTCSeconds().toString())}`
        + " UTC";
    
}

export {
    formatDate
}