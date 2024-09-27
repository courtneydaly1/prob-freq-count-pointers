// add whatever parameters you deem necessary
function constructNote(mes, letters) {
    const letterFreq= {};
    const mesFreq= {};

    // build freq counters

    for (let char of letters){
        letterFreq[char] = ++letterFreq[char] || 1;
    }

    for (let char of mes){
        mesFreq[char] = ++ mesFreq[char] || 1;
    }

    // compare

    for (let char in mesFreq){
        if (!letterFreq[char]){
            return false;
        }
        if (mesFreq[char] > letterFreq[char]){
            return false;
        }
    }
    return true;
}
