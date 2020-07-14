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