// const myNumber=5;
// const munber=6;
// const myName='sushanto'
// console.log('Hello from typescfript',myNumber,myName,munber);


// const num1=10;
// const num2=20;
// const result=num1+num2;
// console.log(result);

// let money=500;
// //money='';
// money=55;

// let money:number=500;
// let honey:string='this is small country in the world';

function multiply(a:number,b:number){
    return a*b;
}
console.log(multiply(5,5));

/* arry */

// let furits=['banana','orange','mongo'];
// furits.push('pototo')

let mixed=['apple',3,false];
mixed.push('orange',4,true)

/* object */

let persion={
    name:'utpal',
    age:21,
    iscaptio:true, 
}
persion.name='shakib'


// const myFunc=(a:string,b:string,c?:string)=>{
//     console.log(c);
//     console.log(`hello ${a} ${b}`);
    
    
// }
// myFunc("A",'B')


// const myFunc1=(a:number,b:number,c?:string):number=>{
//     return a+b;
    

// }
// myFunc1(10,20,)

// function add(first:number |string,second:Number | string):number |string{
//     const result:number |string = first + second;
//     return result;
// }
// const outPut:number |string=add(45,56)

function add(first:number ,second:number):number{
    const result= first + second;
    return result;
}
const outPut:number=add(45,56)
console.log(outPut);








