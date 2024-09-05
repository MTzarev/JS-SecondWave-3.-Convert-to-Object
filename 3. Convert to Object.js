function convertToObject(json) {
    let obj = JSON.parse(json);
    for (let info of Object.entries(obj)) {
        console.log(info.join(`: `));
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
