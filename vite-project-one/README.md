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



