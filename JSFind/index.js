
const arr=[1, 4, 66, 92, 13, 5, 77];
let found;


    for (let index = 0; index <arr.length; index++) 
    {
        if(arr[index]>10)
        {
            found=arr[index];
            break;
        }
    }

document.getElementById("demo").innerText=found;

