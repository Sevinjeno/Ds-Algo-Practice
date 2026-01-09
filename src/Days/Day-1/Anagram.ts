


export function Anagram(str1:string,str2:string){

   if( str1.length !== str2.length) return false;

   if (str1.length === 0 && str2.length === 0) return true;
 
   const tempStr=str2.split("")
    console.log("tempStr",tempStr)


   for(const ele of str1){
         
               const index = tempStr.indexOf(ele)
                console.log("index")

                console.log(tempStr[index])
               if(index===-1) return false;

               tempStr.splice(index,1)
       
    }


     
      return true;




}

  //Recommended  
export function BestAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const count: Record<string, number> = {};

  for (const ch of str1) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (const ch of str2) {
    if (!count[ch]) return false;
    count[ch]--;
  }

  return true;
}