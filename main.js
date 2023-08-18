console.log("hi")


const s = 'Ahmed is the best software engineer in the world';

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.charAt(0));
console.log(s.charAt(0).toLowerCase().charCodeAt(0));

const arr = s.split(' ');

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

const arr1 = [1,2,3,4,5];
console.log(arr1);
const arr2 = new Array(1,2,3,4,5);
console.log(arr2);

const person = {
    name : "Ahmed",
    age : 19
}
console.log(`${person.name} ${person.age}`);

if(person.name){
    console.log("person.name = " + person.name)
}


const color = 'rEd';
switch(color.toUpperCase()){
    case 'RED':
        console.log('R');
        break;
    case 'BLUE':
        console.log('B');
        break;
    default:
        console.log('n');
}


var defangIPaddr = function(address) {
    let res = ""
    for(let i = 0; i<address.length;i++){
        if(address[i] == '.'){
            res += '[.]';
            continue;
        }
        res+=address[i];
    }
    return res;
}; 

var interpret = function(command) {
    let res = "";
    for(let i = 0; i<command.length;i++){
        if(command[i] == 'G'){
            res += command[i];
        }else if(command[i] == '(' && command[i+1] == ')'){
            res+='o';
        }else if(command[i] == '(' && command[i+1] == 'a'){
            res+='al';
        }
    }
    return res;
};

var arrayStringsAreEqual = function(word1, word2) {
    let s1 = ""
    let s2 = ""
    for(let i =0; i<word1.length; i++){
        s1+=word1[i];
    }
    for(let i =0; i<word2.length; i++){
        s2+=word2[i];
    }
    return s1 == s2;
};

var toLowerCase = function(s) {
    return s.toLowerCase();
};

var canBeEqual = function(target, arr) {
    if(target.length != arr.length){
        return false;
    }
    let sum1 = 0
    let sum2 = 0
    let mult1 = 1
    let mult2 = 1
    for(let i = 0; i<arr.length; i++){
        sum1+=arr[i];
        mult1*=arr[i];
        sum2+=target[i];
        mult2*=target[i];
    } 
    return sum1 == sum2 && mult1 == mult2;
};

//OOP

function Person(name , email){
    this.email = email;
    this.name  = name;
}
/*
class Person{
    constructor(name , email){
        this.email = email;
        this.name  = name;
    }

}
*/

const person1 = new Person("Ahmed","Ebeidhamed2@gmail.com")

const btn = document.querySelector(".btn")
const nameField = document.querySelector("#name")
const emailField = document.querySelector("#email")
const taskList = document.querySelector("#users")
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const name = nameField.value
    const taskDesc = emailField.value
    console.log(name + " " + taskDesc)
    if(name != '' && taskDesc != ''){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(name + " " + taskDesc))
        taskList.appendChild(li);
        nameField.value = ''
        emailField.value = ''
    }
});