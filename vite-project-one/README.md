## README.md :- This is the README.md file for the React.js notes.

# Note 

1. First letter of the component must be capital.
2. Diffing algo and reconciliation.
3. Only one component(function) allowed to default export.
4. Wrap named export components in { }.

```javascript
const Demo=()=>{
    return "hello world"
}
```
Import in other component:
```
import About, { Demo } from "./component/About"
```