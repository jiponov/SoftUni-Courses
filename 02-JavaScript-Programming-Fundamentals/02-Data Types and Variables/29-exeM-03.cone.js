function cone(radius, height) {

    let volume = ((Math.PI * radius * radius * height) / 3);
    let area1 = (radius * radius * Math.PI);
    let s = Math.sqrt(radius * radius + height * height);
    let area2 = (Math.PI * radius * s);
    let totalArea = area1 + area2;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);