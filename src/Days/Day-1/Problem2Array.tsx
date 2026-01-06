// Build a search box to filter users.

import { useCallback, useState } from "react";
import {CheckDuplicate} from "./ContainDuplicate.ts"
const Problem2Array = () => {
  const [query, setQuery] = useState("");

  const Dup=CheckDuplicate([1,2,3,4,1])
  console.log("Dup",Dup)

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
