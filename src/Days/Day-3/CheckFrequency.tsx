


function Frequency(arr:number[]){

  const Freq=new Map();

  for (const item of arr){
     
    Freq.set(item,(Freq.get(item)||0)+1)

  }

  console.log("Freq",Freq)


}




const CheckFrequency = () => {

    Frequency([1,2,3,4,5,2,1,3,4])
  return (
    <div>CheckFrequency</div>
  )
}

export default CheckFrequency