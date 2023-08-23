function repainting(input) {
    let naylonSquareMeters = Number(input[0]);
    let paintLiters = Number(input[1]);
    let razreditelLiters = Number(input[2]);
    let hoursNeeded = Number(input[3]);
    let sumNylon = (naylonSquareMeters + 2) * 1.50;
    let sumPaint = (paintLiters + (paintLiters * 0.1)) * 14.50;
    let sumRazreditel = razreditelLiters * 5;
    let sumTorbichki = 0.40;
    let totalSumMaterials = sumNylon + sumRazreditel + sumPaint + sumTorbichki;
    let sumMaistori = (totalSumMaterials * 0.30) * hoursNeeded;
    let sumTotalRepainting = totalSumMaterials + sumMaistori;
    console.log(sumTotalRepainting);
}

repainting(["10",
    "11",
    "4",
    "8"]);