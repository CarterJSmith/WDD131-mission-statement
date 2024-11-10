const obj = {
    key : "value",
    'key1' : "value1",

}


function Name() {
    this.name = "Carter Smith";
}

console.log(obj.key);
console.log(obj['key1']);

const doc = {
    getElementById: (id) => {
        return "Hello";
    }
}

console.log(doc.getElementById("test"))