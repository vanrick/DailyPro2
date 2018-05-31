// create a degree counter with
// depending on hour and minute hand
// of a rotating clock


// function clock(time) {
//     const timeSplit = String(time).split(':');
//     const minuteHourTable = {
//         05: '1',
//         10: '2',
//         15: '3',
//         20: '4',
//         25: '5',
//         30: '6',
//         35: '7',
//         40: '8',
//         45: '9',
//         50: '10',
//         55: '11',
//         00: '12'
//     };
//     const hourMinuteTable = {
//         1: '05',
//         2: '10',
//         3: '15',
//         4: '20',
//         5: '25',
//         6: '30',
//         7: '35',
//         8: '40',
//         9: '45',
//         10: '50',
//         11: '55',
//         12: '60'
//     };
//     const hourHand = timeSplit[0];
//     const minuteHand = timeSplit[1];
//     if (Number(minuteHand) >= 60) {
//         return 'invalid time';
//     } else if (Number(hourHand) === 12 && Number(minuteHand) !== 00) {
//         return Number(minuteHand) * 6
//     } else if (Number(minuteHand) === 00 && Number(hourHand) !== 12) {
//         return (60 - hourMinuteTable[Number(hourHand)]) * 6
//     } else if (Number(hourHand) === minuteHourTable[Number(minuteHand)]) {
//         return 360;
//     } else if (hourMinuteTable[Number(hourHand)] < minuteHand && hourHand !== '12') {
//         return (Number(minuteHand) - hourMinuteTable[Number(hourHand)]) * 6;
//     } else if (hourMinuteTable[Number(hourHand)] > minuteHand) {
//         return (60 - Number(minuteHand)) * 6;
//     }
//     return 'invalid time';

// }


// console.log(clock('6:10'));


function clock(h, m) {
    if (h === 12 && m === 00) {
        return 360
    } else if (h === 12) {
        h = 0;
    }
    const hourDeg = (0.5 * m) + h * 30;
    const minuteDeg = 6 * m;
    return Math.abs(hourDeg - minuteDeg);
}

console.log(clock(12, 05));