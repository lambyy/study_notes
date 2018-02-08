# Event Bubbling/Capturing
When an event happens, it first runs the handlers on it, then on its parents, then all the way up to other ancestors.

`event.target` is the most deeply nested element that caused the event.

`event.currentTarget` is current element handling the event.

`event.stopPropagation` stops the event bubbling after executing that event handler.

Capture phase of event processing starts from top level element down to target element, but is rarely used. To catch event on capturing phase, set 3rd argument of `addEventListener` to be `true`.

source: https://javascript.info/bubbling-and-capturing

# Event Delegation

In the case of many elements behaving similarly, event delegation allows us to assign a single handler on their common ancestor instead of on each element.

  1. Put single handler on container
  2. In handler, check source element `event.target`
  3. Handle event if it happened inside relevant element

Benefits:
  1. Simplify initiation & save memory, no need to add many handlers
  2. Less code, no need to add/remove handlers when add/removing elements
  3. Can mass remove elements with `innerHTML`

Limitations:
  1. Event must bubble
  2. Delegation may add CPU load, but usually negligible

Can use event delegation to put single handler as entry point for actions. Using `data-[attribute]` to execute methods on the handler based on value of the attribute.

source: https://javascript.info/event-delegation
