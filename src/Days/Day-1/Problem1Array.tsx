
// You have an array of users. Render them in a list.

type User = {
    id:number;
    name:string;
    age:number;
}



const users : User[] = [
  { id: 1, name: "Alex", age: 25 },
  { id: 2, name: "Sam", age: 30 },
  { id: 3, name: "Riya", age: 22 }
];
const Problem1Array = () => {
  return (
    <div>{users.map((user)=>(
         <li key={user.id}>
          {user.name} — {user.age}
        </li>
    ))}</div>
  )
}

export default Problem1Array