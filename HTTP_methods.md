# HTTP Methods

### GET
Used to retrieve info from given server using given URI

### HEAD
Same as GET but server transfers status line and header section only

### POST
Used to send data to server using HTML forms

### PUT
Replaces all current representations of target resource with uploaded content, store at specific location

### DELETE
Remove all current representations of target resource given by URI

### CONNECT
Establish tunnel/network connection to server identified by given URI over HTTP

### OPTIONS
Describes communication options (HTTP methods, etc) supported by target resource

### TRACE
Performs message loop-back test along path to target resource, echoes content of HTTP Request back to requester, generally for debugging

source: https://www.tutorialspoint.com/http/http_methods.htm

# HTTP Status Codes
### 1xx Informational
### 2xx Success
  - 200 OK - request succeeded, response depends on the request method
  - 201 Created - request fulfilled and resulted in new resource being created
  - 204 No Content - server has fulfilled request but does not need to return entity-body
### 3xx Redirection
  - 304 Not Modified - indicates resource has not been modified since last requested, typically for conditional GET requests to reduce band-width usage
### 4xx Client Error
  - 400 Bad Request - request could not be understood by server due to malformed syntax
  - 401 Unauthorized - request requires user authentication when it is possible but failed or not provided
  - 403 Forbidden - server understood request but refuse to fulfill, no difference with authentication
  - 404 Not Found - server cannot find requested resource, no indication whether the condition is temporary or permanent
  - 409 Conflict - request not completed due to conflict with current state of resource
### 5xx Server Error
  - 500 Internal Server Error - server encountered unexpected condition that prevented it from fulfilling request

source: http://www.restapitutorial.com/httpstatuscodes.html
