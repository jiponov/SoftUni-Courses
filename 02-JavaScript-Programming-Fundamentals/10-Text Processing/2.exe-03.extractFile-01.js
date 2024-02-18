function extractFile(path) {

    // find last element of path (split by \\)
    let tokens = path.split('\\');
    let filename = tokens[tokens.length - 1]                // Или с   tokens.pop();
    //console.log(filename);

    // split last element in two at final period
    let index = filename.lastIndexOf('.');
    //console.log(index)
    let name = filename.substring(0, index);
    let extension = filename.substring(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('---');
extractFile('C:\\Internal\\training-internal\\Template.pptx');