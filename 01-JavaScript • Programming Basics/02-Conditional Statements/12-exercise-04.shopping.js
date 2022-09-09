function solve(input) {

    let budget = Number(input[0]);
    let videoCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let priceVideo = videoCount * 250;
    let priceProcessor = (priceVideo * 0.35) * processorCount;
    let priceRam = (priceVideo * 0.1) * ramCount;
    let price = priceProcessor + priceRam + priceVideo;

    if (videoCount > processorCount) {
        price *= 0.85;
    }

    let diff = Math.abs(price - budget);

    if (price <= budget) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}
solve(["900", "2", "1", "3"]);