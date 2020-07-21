# ReactJs - Notes while learning

## Initial setup
1. [Install node](https://nodejs.org/en/)
2. [Install Visual Studio Code](https://code.visualstudio.com/)
   - Install the extenstion: [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Creating an app 
### using npx
```
npx create-react-app hello-world
cd hello-world
npm start
```

### using npm
```
  npm install create-react-app -g
  create-react-app hello-world
```

## Control flow
- /public/index.html
- /src/index.js
- /src/App.js

## Components
### Functional Components - stateless
- props - optional parameter
- just returns jsx
- use as much as possible
- no need to worry about this keyword
- mainly responsible for UI

### Class Components - stateful
- typical ES6 class
- extends React.Component
- props - optional parameter
- state - optional private state
- render method return jsx
- feature rich
- complex UI logic
- lifecycle hooks

## JSX - JavaScript XML 
- xml like code for elements and Components
- has tag name, attributes and children

## Props
- Passed from Parent component (attributes) to child component.
- Functional parameters
- immutable - child component cannot change the props value
- Functional components - props parameter
- Class components - this.props

## State
- Managed within the component
- Variables are declared in the function body
- Mutable - can be changed
- Functional components - useState Hook
- Class component - this.state

### setState() in Class components
- React groups multiple setState() calls into one for better performance
- if state has to be set based on previous state, use function as first arg for setState()

## Event Handling
### Event Handling in Functional components
- handler should be a function defined inside the main component function
- event name should be camelCase. Example: onClick
- handler function should be within {}

### Event Handling in Class components
- same rules as functional component
- event handler function should be invoked using this keyword

#### Event binding in Class components 
- complicated due to this keyword
  1. bind directly in the event method using .bind(this) - has scalability and performance isses
```
<button onClick={this.clickHandler.bind(this)}>Click</button>
```
  2. use arrow functions - has performance issues
```
<button onClick={() => this.clickHandler()}>Click</button>   
```
  3. bind in constructor - most preferred method
```
this.bestClickHandler = this.bestClickHandler.bind(this);
```

## Methods as props
- used in child components to pass values back to the parent component

## Conditional Rendering
- use if-else blocks to return jsx directly
```
if (this.state.isLoggedIn) {
  return <div>Welcome Saravana</div>;
} else {
  return <div>Welcome Guest</div>;
}
```
- use if-else blocks with local variable and then return jsx
```
let message;
if (this.state.isLoggedIn) {
  message = <div>Welcome Saravana</div>;
} else {
  message = <div>Welcome Guest</div>;
}

return <div>{message}</div>;
```
- use terinary operator
```
return this.state.isLoggedIn ? (
  <div>Welcome Saravana</div>
) : (
  <div>Welcome Guest</div>
);
```
- use short circuit operator
```
return this.state.isLoggedIn && <div>Welcome Saravana</div>;
```

## List rendering
"key" is a special string attribute included when creating lists of elements.
Keys give the elements a stable indentity.
Keys help identify which items have been changed, added or removed.
Helps in efficient update of user interface.

```
const personList = persons.map(person => (
  <h3 key={person.id}>
    I am {person.name}. I am {person.age} years old. I know {person.skill}.
  </h3>
));

return <div>{personList}</div>;
```
Note: key value is not accessible in the child component. If you need it, pass it as a different prop.

## Styling and CSS
1. CSS Stylesheets
2. Inline styling
3. CSS modules
   - scoped within the component. Cannot be used in child components.
4. CSS in JS libraries (styled components)


## Form Handling

## Component lifecycle methods
There are 4 phases for class components:
1. Mounting - when an instance is being created and inserted into DOM
   - constructor
   - static getDerivedStateFromProps
   - render
   - componentDidMount
2. Updating - when re-rendered as result of changes to props or state
   - static getDerivedStateFromProps
   - shouldComponentUpdate
   - render
   - getSnapshotBeforeUpdate
   - componentDidUpdate
3. Unmounting - when removed from DOM
   - componentWillUnmount
4. Error handling - when there is an error in rendering, in a lifecycle method or in constructor of any child component
   - static getDerivedStateFromError
   - componentDidCatch

[ReactJS Tutorial - 23 - Component Mounting Lifecycle Methods](https://www.youtube.com/watch?v=KDXZibVdiEI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=23)
