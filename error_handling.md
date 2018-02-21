## Try/Catch
- `try..catch` block allows code to "catch" errors instead of immediately stopping
  1. `try {...}` code executed
  2. if no errors, `catch(err)` block is skipped
  3. if error occurs, `try` execution is stopped and control flows to beginning of `catch(err)` block with an error object detailing what happened
- `try..catch` only works for runtime errors, doesn't work if code is syntactically wrong
- `try..catch` works synchronously (will not catch code in setTimeout)
- main properties of error obbject: `name`, `message`, `stack`
- `throw` operator generates an error
  - JS built-in Error constructor: `new Error(message)`
- `catch` block should handle any errors it expects and knows how to and rethrow any errors it does not
- `finally` clause runs in all cases after try if there were no errors and after catch if there were errors
- variables inside `try..catch..finally` are local
- "global" error handlers catch errors that "fall out", in browser as `window.onerror`

source: https://javascript.info/try-catch

## Custom Errors
- use `instanceof` to check for particular errors, this works for inheritance too 

source: https://javascript.info/custom-errors
