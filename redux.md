# Redux

## Flux
Flux is a front-end application architecture, a pattern to structure one's application using unidirectional data flow. Action begins flow of data, indicating type of change to be performed. Dispatcher distributes the actions to the store which represents the state of the application. State changes are passed to registered views which render user interfaces and listens to changes and responds to changes by passing actions to update internal state.

## Redux
Redux is a particular implementation of Flux. State of application is store in a single store that is the single source of truth. State is read-only and can only be changed by dispatching an action. This ensures Redux loop never short circuited and changes to state remain single-threaded. Reducers are pure function that change the state by taking the old state and returning the next state.

### Principles
1. Single Immutable State Tree

  Entire state of application will be represented by a single JS object. All mutations and changes to state are explicit so it is possible to keep track of all of them. Every change is reflected in the state object describing the entire application.

2. State Tree is Redundant

  State is read-only and can only be changed by dispatching an action. An action is a POJO that describes the minimum change to the data and contains a type property. The components don't need to know how it happens, they only pass the type of change and the ID of what changed. Any data that gets into the Redux application gets there by actions.

3. Reducers are Pure Functions

  Pure function return values depend solely on the values of their arguments and have no observable side effects. Simply calculates the new value, are predictable and do not modify values passed to them. The state mutations in an application need to be described as a pure function that take the previous state, the action and returns the next state. The reducer is a pure function to implement the update logic of the application.

### Redux `createStore`
```
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () =>  state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  dispatch({});

  return { getState, dispatch, subscribe };
};
```

### Redux `combineReducers` Object Composition
Create a single larger reducer by calling existing reducers to manage the different parts of application state and combines their results in a single state object. Anytime an action comes in, those existing reducers handle the action independently. This pattern helps scale Redux development as different people can work on different reducers handling the same actions without causing merge conflicts.

```
// single root reducer
const toDoApp = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,
      action
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action
    )
  };
}

// result of `combineReducers()` produces the root reducer
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};
```

## Redux Container Components
As general rule, strive to separate components into presentational components (do not need to know behavior) and container components (specifies the behavior). However, this leads to threading props down to leaf components even when intermediate components don't use them. Instead, employ additional container components that can avoid passing additional props to get data from the store and keep intermediate presentational components decoupled from the behavior that its child components need.

Container components connect presentational component to the Redux store and specify the data and behavior that it needs.

React-Redux Provider can provide the store to container components as context. Use `connect` function to generate a container component that takes the required props from the state and the dispatch methods as arguments and wraps about the presentational component to connect to Redux store. 
