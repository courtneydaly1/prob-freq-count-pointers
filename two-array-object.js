// add whatever parameters you deem necessary
function twoArrayObject(keys, val) {
    return keys.reduce((obj, cur, idx)=> {
        obj[cur] = idx < val.length ? val[idx] : null;
        return obj;
    }, {});
}
