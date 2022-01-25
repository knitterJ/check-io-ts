// You prefer a good old 12-hour time format. But the modern world we live in would rather use the 24-hour format and you see it everywhere. Your task is to convert the time from the 24h format into 12-h format by following the next rules:
// - the output format should be 'hh:mm a.m.' (for hours before midday) or 'hh:mm p.m.' (for hours after midday)
// - if hours is less than 10 - don't write a '0' before it. For example: '9:05 a.m.'


function timeConverter(dayTime: string) {
    var dayTimeNumber = parseInt(dayTime);
    var dayTimePm = dayTimeNumber - 12;
    var dayTimeMins = dayTime.substring(2);

    if (dayTimeNumber == 0) {
        return "12" + dayTimeMins + " a.m."
    } else if (dayTimeNumber < 11) {
        return dayTime.substring(1) + " a.m."
    } else if (dayTimeNumber == 11) {
        return dayTime + ' a.m.'
    } else if (dayTimeNumber == 12) {
        return dayTime + ' p.m.'
    } else return dayTimePm + dayTimeMins + ' p.m.';
}

console.log(timeConverter('12:30'));
console.log(timeConverter('09:30'));
console.log(timeConverter('00:30'));
console.log(timeConverter('11:30'));
console.log(timeConverter('21:30'));