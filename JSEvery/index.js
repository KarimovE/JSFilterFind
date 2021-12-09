
const arr=[66, 92, 13, 13, 77, 9];
let found=true;


function every(arr){

    for (let index = 0; index <arr.length; index++) 
    {
        if(arr[index]<10)
        {
            found=false;
            break;
        }
    }

    return found;

}
   

document.getElementById("demo").innerText=every(arr);

