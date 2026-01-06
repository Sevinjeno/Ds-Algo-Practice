// Build a search box to filter users.

import { useCallback, useState } from "react";
import { Anagram } from "./Anagram.ts";
const Problem2Array = () => {
  const [query, setQuery] = useState("");
   
  const result=Anagram("abc","cab")
  console.log("Result",result)

  const handleQuery = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <div>Filter Search</div>
      <input
        type="text"
        value={query}
        onChange={handleQuery}
        placeholder="Search"
      />
      <div>{query}</div>
    </>
  );
};

export default Problem2Array;
