//28.flatmap

let arr1=[1,2,3,4,5];
let arr2=arr1.flatMap(data);

function data(arr2){
    return arr2 ** 2;
}
console.log(arr2);


//29.group

console.log("hello world");
console.group();
console.log("hello again , this time inside a group")


//30.map

let a1=[1,2,3,4,5];
let b2=a1.map(data);

function data(b2){
    return b2 * 2;
}
console.log(b2);


//31.some

let arr3=[2,5,8,9,10];
let arr4=arr3.some(check);

function check(arr4){
    return arr4 % 2 ==0;
}
console.log(arr4);


//32.toLocaleString

let a=new Date();
console.log(a);
console.log(typeof a);

let b=a.toLocaleString();
console.log(b);
console.log(typeof b);