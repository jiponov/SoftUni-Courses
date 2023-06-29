function cutAndReverse(text) {
    let a = '';
    let b = '';
    for (let i = 0; i < text.length; i++) {
        let current = text[i];

        if (i < (text.length / 2)) {
            a += current;
        } else {
            b += current;
        }
    }

    let aResult = '';
    let bResult = ''
    for (let i = a.length - 1; i >= 0; i--) {
        aResult += a[i]
    }
    for (let i = b.length - 1; i >= 0; i--) {
        bResult += b[i]
    }
    console.log(aResult)
    console.log(bResult)
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');