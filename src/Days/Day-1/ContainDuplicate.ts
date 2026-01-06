// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

export function CheckDuplicate(arr:number[]):boolean {
  //arr =[2,3,45,1,1], arr=[], arr="",arr=0, arr=[1,2,3,4]
  if (!Array.isArray(arr) || arr.length < 2) {
    return false;
  }

  
  const seen:number[] = [];
  for (const item of arr) {
    console.log("item",item)
    if (seen.includes(item)) return true;
    console.log("Seen",seen)
    seen.push(item);
  }

  return false;
}


