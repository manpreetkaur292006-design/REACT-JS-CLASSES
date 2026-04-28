# Context API

## Steps to follow :

1. Create a context .
```
const userContext = createContext()
```

2. Provider 
```
<userContext.Provider value={value}>

</userContext.Provider>

 <!-- Syntax ko learn karna hai and  value={value} - similar to props -->
```

3. use the context (consumer)
```
useContext(userContext)  
```
(using the new hook useContext)

(dark and light theme is the best example for the context api that is easy)

value = {{movie}} here value = {movie}  according to syntax
yahan double curly bracket ayega

