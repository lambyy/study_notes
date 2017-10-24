JS is a single-threaded non-blocking asynchronous concurrent language
  - one thread == one call stack = one thing at a time
  - concurrent means one thing at a time, except not really

Browser has a call stack, event loop, callback queue and web APIs
  - call stack == where in the program you are
  - web APIs: DOM, ajax, setTimeout

Blocking is what happens when things are slow - you have slow things in the call stack
  - why is this a problem? Because Browsers!
    - Browsers can't do anything until requests/functions on call stack are complete
    - Can't render, etc
  - to solve this: ASYNCHRONOUS callbacks

When an asynchronous request/function is complete:
  - callback is pushed onto a callback queue
  - event loop pops first thing off callback queue into call stack if the stack is empty

------------------------      ---------------------
|      CALL STACK      |      |     Web APIs      |
|                      |      |                   |
|                      |      |                   |
|  async function() ---|----->|   wait for async  |
|  function()          |      |    request/f(x)   |
|  function()          |      |    to complete    |
------------------------      ---------------------
                                  /
          🔁 event loop          /
                               /
------------------------      /
|    CALLBACK QUEUE    |<-----
|                      |
|    callback f(x)s'   |
|    from completed    |
|    requests/f(x)s'   |
------------------------

Don't push slow code onto the stack --> you will block other things from happening
