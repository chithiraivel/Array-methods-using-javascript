//22.entries()

let array1=['a','b','c','d','e'];
let array2=array1.entries();

for(let a of array2){
    console.log(a);
}



//23.values()

let a=['a','b','c','d','e'];
let b=a.values();

for(let x of b){
    console.log(x);
}



//24.filter()

let ages=[25,18,17,10,28,30];
let data=ages.filter(only);

function only(data){
    return data >= 18;
   
}
console.log(data)


//25.find()

let array=[-0.3,-0.2,-0.4,0.3,-0.6];
let d=array.find(data);

function data(d){
    return d > 0
}
console.log(d);




//26.findIndex()

let array3=[-0.3,-0.2,-0.4,0.3,-0.6];
let d1=array3.findIndex(data);

function data(d1){
    return d1 > 0
}
console.log(d1);



//27.flat()

let a1=[1,2,[3,4],[5,6],[[7,8]]];
let b1=a1.flat()
console.log(b1);


