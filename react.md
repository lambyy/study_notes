# Fundamentals of React

## Components
- concept of reusable components
- small components put together to build bigger components, are reusable across projects
- react component is a POJO
- react components names must be capitalized to differentiate from HTML elements
- every component receives a list of attributes (props)
- must return JSX (JavaScript Extension)

## JSX & `React.createElement`
- similar to `document.createElement` but also creates an element to represent React component
- accepts dynamic # arguments after 2nd to represent children of created element
- JSX is used so that syntax can look like HTML instead of using `React.createElement`
- preprocessors necessary to convert JSX into `React.createElement` syntax for browser

## JavaScript Expressions & JSX
- any JS expression can be written inside curly braces of a JSX
- JS objects are also Expressions

## React Component with JS Classes
- react supports creating components through JS class syntax
- define a class that extends `React.Component` & an instance function `render()`
- elements rendered through class component gets an instance property of `props`

## Events in React
- react events are named in camelCase
- JS function reference is passed as event handler instead of a string

## Private state
- state is a special property in React class components
- `this.setState` changes the state field
- React monitors state for changes and re-renders accordingly
- set new state by returning object with new values to updated

source: https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2
