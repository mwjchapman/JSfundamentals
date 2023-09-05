console.log("hello world");

const la = "los angeles" 
const arr = la.split(" ");

for (var i = 0; i = < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].splice(1);
}
//Los Angeles