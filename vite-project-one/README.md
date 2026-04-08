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

## Notes just for the exams - Life Cycle methods
   > learn the summary of the life cycle methods

5. Class component : 
- Class component uses life cycle method to perform multiple task.
- Life cycle method has so much un-necessary boiler plate code so the application is getting complex and hard to manage.
   > Life-Cycle Methods : mounting, updating, unmounting 
- So that's why we shifted to functional component.

6. We cannot re-render normal variable in jsx.
7. Inside onClick or any event just write the function name , no need of () for function call. 


## HOOKS 

- Hooks are nothing just the simple functions.
- It is predefined functions.
- Hooks allows to use state and other features without writing a class.
> Two rules to use Hooks : **Important** 
1. **Only call Hooks at the top level :** <p> Do not call hooks inside loops, conditions or nexted functions. Hooks should always be used at the top level of the react functions.
2. **Only call hooks from React functions :** <p> You can't call hooks from regular js functions instead you can call hooks from React functional component.

- **NOTE :**  we can't re-render or update the value or state declared in normal js varibles. (ise liye hooks aya)

**Note** : setCount((prev)=>): Here "prev" target the latest previous value of the state.

