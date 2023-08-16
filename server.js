// server.js
var http = require("http"); // Import the built-in Node.js module
var fs = require("fs"); // Import the built-in Node.js module

/**404 response
 * @param {*} response - The response object that the server sends back to the client
 * @returns {void} - Returns nothing
*/
function send404Response(response) {
    // Write the response header with HTTP 404 and the content type as plain text
    response.writeHead(404, { "Content-Type": "text/plain" });
    // Write the response body with the error message
    response.write("Error 404: Page not found!");
    response.end(); // End the response process
}

/**
 * Handle a user's request to the server and send back a response to the client
 * @param {*} request - The request object sent by the client to the server
 * @param {*} response - The response object that the server sends back to the client
 */
function onRequest(request, response) {
    // Inspect the request method and URL. `/` is the root URL (homepage)
    if (request.method == "GET" && request.url == "/") {
        // Write the response header with HTTP 200 and the content type as HTML
        response.writeHead(200, { "Content-Type": "text/html" });
        // Write the response body with the HTML content
        fs.createReadStream("./index.html").pipe(response);
    } else {
        // Send a 404 response if the request is not for the homepage
        send404Response(response);
    }
}

// Create a server that listens for traffic/user's request on port 8888
http.createServer(onRequest).listen(8888);
console.log("Server has started");
// > Prints "Server has started" to the console