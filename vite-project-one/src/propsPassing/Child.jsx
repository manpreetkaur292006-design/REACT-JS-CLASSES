import React from 'react'

// Old method
// const Child = (props) => {
//   return (
//     <>
//     <div>Child</div>
//     <h1>{props.name}</h1>
//     </>
//   )
// }

// new method
const Child = ({name,alert}) => {
  return (
    <>
    <div>Child</div>
    <h1>Rendered in child component: {name}</h1>
    <button onClick={alert}>Click</button>
    </>
  )
}

export default Child