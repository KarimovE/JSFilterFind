
const arr=[1, 4, 56, 66, 92, 13, 5, 77];
const filteredarr=[];
let i=0;

    for (let index = 0; index <arr.length; index++) 
    {
        if(arr[index]>10)
        {
            filteredarr[i]="  "+arr[index];
            i++;
        }
    }

document.getElementById("demo").innerHTML=filteredarr;

