// const {getAge} =require("./student");
// console.log(s1.getName());
// console.log(getAge());
// console.log(s1.cgpa);

//os,path
const {totalmem,freemem}=require('os');
// console.log(os.userInfo())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(totalmem())
// console.log(freemem())
// console.log(__dirname)
// console.log(__filename)


const path=require('path')
// console.log(path)
const extentionName=path.extname('index.html')
console.log(extentionName)
const joinName=path.join(__dirname+"/../views")
console.log(joinName)