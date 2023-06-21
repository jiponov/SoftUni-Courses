function substring(str, startIndex, count) {

    let endIndex = startIndex + count;
    str = str.substring(startIndex, endIndex);
    console.log(str);
}
substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);