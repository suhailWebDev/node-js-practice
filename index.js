// const app=require('./app')

// // var x='30';
// // let y=40;
// // const z=50;
// // console.log(x+y+z);
// // if(x==30){
// //     console.log('matched');
// // }
// // for(i=0;i<=10;i++){
// //     console.log(i);
// // }
// // console.log(app);
// const arr=[2,5,7,8,8,10,4];
// let result=arr.filter((item)=>{
//     return item<=4
// })
// console.warn(result);

// const fs=require('fs');
// console.log('Code step by step');
// // fs.writeFileSync('hello2.txt','hello this is second file');
// console.log(__dirname);
// console.log(__filename);

// const http=require('http');
// function dataControl(req,resp){
//     resp.write('<h1>Hello this is Mohd Suhail<h1>');
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);

// console.log('Package.json');
// const colors = require('colors');
// console.log("hello".red);
// console.log("package.json".green.bgBlue);

// console.log('code with suhail');
// console.log(100+20);

const http=require('http');
const data=require('./data');
http.createServer(((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'apllication/json'});
    resp.write(JSON.stringify(data));
    resp.end();
})).listen(2000); 