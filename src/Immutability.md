Why we do immutable updates (the real reason)

React decides whether to re-render using reference comparison:

oldState === newState


If reference is same → React skips work
If reference is new → React updates UI

Mutation keeps the same reference.
Immutability creates a new reference.

That’s it. No philosophy. Just mechanics.

3️⃣ THE PATTERN LIST (print-worthy)
🔹 Arrays
✅ Add item
setTodos((prev) => [...prev, newTodo]);


Why:

New array

Safe with closures

React detects change

❌ Avoid:

todos.push(newTodo);
setTodos(todos);

✅ Remove item
setTodos((prev) => prev.filter((t) => t.id !== id));


Why:

Filter creates new array

Clean intent

❌ Avoid:

todos.splice(index, 1);

✅ Update item
setTodos((prev) =>
  prev.map((t) =>
    t.id === id ? { ...t, text: "Updated" } : t
  )
);


Why:

New object only where needed

Preserves performance

❌ Avoid:

t.text = "Updated";

✅ Replace entire array
setTodos(newArray);


Use when:

API response

Reset state

🔹 Objects
✅ Update object
setUser((prev) => ({ ...prev, age: 30 }));


Why:

Shallow copy

New reference

❌ Avoid:

user.age = 30;
setUser(user);

✅ Update nested object
setUser((prev) => ({
  ...prev,
  address: {
    ...prev.address,
    city: "Mumbai",
  },
}));


Rule:

Copy every level until the change point.

❌ Avoid:

prev.address.city = "Mumbai";

🔹 Combined object + array
setState((prev) => ({
  ...prev,
  todos: prev.todos.filter((t) => t.id !== id),
}));


Used in:

Dashboards

Forms

Large apps

4️⃣ Functional updates (closure-safe pattern)

Always prefer this:

setTodos((prev) => [...prev, newTodo]);


Over this:

setTodos([...todos, newTodo]);


Why:

Prevents stale closures

Safe with async logic

Required in concurrent rendering

5️⃣ What to avoid (tattoo this mentally)

❌ Mutating state directly
❌ Using index as key
❌ Updating nested data without copying
❌ Depending on stale variables in async callbacks
❌ Overusing useEffect for simple state changes