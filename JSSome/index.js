
const arr=[26, 21, 16, 33, 74, 93];
let found=false;


function some(arr){

    for (let index = 0; index <arr.length; index++) 
    {
        if(arr[index]<10)
        {
            found=true;
            break;
        }
    }
    return found;

}
   

document.getElementById("demo").innerText=some(arr);

