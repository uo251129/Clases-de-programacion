
function printSeries(start, end){
    var series = []

    for (let i = start; i <= end; i++){
        series.push(i);
    }

    return series;
}

var seriesResult = printSeries(3, 8);

console.log(seriesResult);

seriesResult = printSeries(2, 7);

console.log(seriesResult);

seriesResult = printSeries(24, 35);

console.log(seriesResult);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 100; i++){
    var randomNumber = getRandomInt(0, 10);
    console.log(randomNumber);
}
