// You prefer a good old 12-hour time format. But the modern world we live in would rather use the 24-hour format and you see it everywhere. Your task is to convert the time from the 24h format into 12-h format by following the next rules:
// - the output format should be 'hh:mm a.m.' (for hours before midday) or 'hh:mm p.m.' (for hours after midday)
// - if hours is less than 10 - don't write a '0' before it. For example: '9:05 a.m.'


function timeConverter(dayTime: string) {
    var dayTimeHours = parseInt(dayTime);
    var ampm = dayTimeHours >= 12 ? ' p.m.' : ' a.m.';

    //if the result of modulo operation equals 0 (12 and 0 case), return 12
    dayTimeHours = dayTimeHours % 12 || 12;
    return `${dayTimeHours}${dayTime.substring(2)}${ampm}`

    // var e = 0 || {};                   e = {}
    // var f = 0 || '' || 5;              f = 5
    // var g = '' || 'yay' || 'boo';      g = 'yay'

}

console.log(timeConverter('09:30'));
console.log(timeConverter('12:30'));
console.log(timeConverter('00:30'));
console.log(timeConverter('11:30'));
console.log(timeConverter('21:30'));