# Tips to improve HTML page loading

Optimized web pages provides
  - more responsive site
  - reduce load on web server/internet connection

## 1. Reduce page weight
- page weight = most important factor in page-load performance
- eliminate unnecessary whitespaces & comments through minimization
- move inline scripts & CSS into external files
- these can improve download performance

## 2. Minimize # of files
- reduce # files referenced in web page to lower # of HTTP connections required
- background imgs in CSS can be combined into image sprite to reduce HTTP lookups
- single-image caching

## 3. Reduce Domain Lookups
- each separate domain in CSS links & JS img src cost time in DNS lookup
- use minimum necessary diff domains on pages

## 4. Cache Reused Content
- any content that can be cached should be with appropriate expiration times

## 5. Optimally Order Components of Page
- download page content first (along with any CSS & JS required for initial display)
- dynamic features requiring page to completely load before being used should be initially disabled
- re-enable after page finishes loading so that JS will be loaded after page contents improves overall appearance of page load

## 6. Reduce # Inline Scripts
- inline scripts can be expensive for page loading (parser must assume the script can modify page structure while parsing in progress)
- reduce use of `document.write()` to output content
- use modern AJAX methods to manipulate page content

## 7. Use Modern CSS & Valid Markup
- 












source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Author_fast-loading_HTML_pages
