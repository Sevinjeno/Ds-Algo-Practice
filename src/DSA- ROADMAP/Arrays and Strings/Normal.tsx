let a=1;
let b=2;
// let c=3;


const d=8;
const e=9;
const f=10;


[a,b]=[d,e,f]

console.log(a)
console.log(b)
// console.log(c)



const Normal = () => {
    
  // two pointers
  function ReverseArray(arrData:number[]){

    let left=0;
    let right=arrData.length-1;

    while(left<right){
      
      console.log("left",left);
      console.log("right",right);
      
       [arrData[left],arrData[right]]=[arrData[right],arrData[left]];

      left++;
      right--;

    }


    return arrData

  }

  const Reversed=ReverseArray([1,2,3,4,5,6])
  console.log("Reversed",Reversed)


  return (
    <div>Normal</div>
  )
}

export default Normal