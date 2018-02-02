# React Lifecycle Methods

React splits complicated UI into small bits to compartmentalize an application. Lifecycle methods allow us to control what happens when each section of the UI renders, updates, thinks about re-rendering and disappears

## componentWillMount
- before component render function called
- usually, not much to be done as component does not exist yet and default configuration should be done in component's constructor
- commonly used for setup configuration in root component at runtime (connecting to external APIs)

## componentDidMount
- component is rendered, ready to be used
- at this point start loading in your data (AJAX calls, etc) & do all the setup you couldn't do without the DOM

## componentWillReceiveProps(nextProps)
- new data has arrived
- at this point, has access to next props and current props
- we should check which props will change & act on significant prop changes to trigger state transitions
- this function not called on initial render

## shouldComponentUpdate(nextProps, nextState)
- use to control exactly when component will re-render
- new props and state are compared to current to determine if re-render is necessary
- returns a boolean
- can improve performance by reducing unnecessary re-renders

## componentWillUpdate
- at this point, committed to updating
- functionally, this is same as componentWillReceiveProps but can not call setState
- commonly used instead of componentWillReceiveProps on components that has shouldComponentUpdate

## componentDidUpdate
- at this point, redo the setup in componenetDidMount
- does not know why it updated
- use to update DOM in response to prop/state changes

## componentWillUnmount
- clean up anything involving the component before it disappears i.e cancel outgoing network requests, remove component associated event listeners, etc

source: https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
