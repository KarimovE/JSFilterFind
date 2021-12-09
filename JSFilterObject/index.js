const person1={name: "Agil", surname: "Aliyev", age:13}
const person2={name: "Veli", surname: "Esedov", age:41}
const person3={name: "Sahib", surname: "Sadigov", age:22}

const arr=[person1, person2, person3];
const filteredarr=arr.filter(checkAdult);

function checkAdult(value){
    return (value.age)>18;
}

for (let index = 0; index <filteredarr.length; index++) {
    document.getElementById("demo").innerHTML+=' '+ filteredarr[index].name;
}
