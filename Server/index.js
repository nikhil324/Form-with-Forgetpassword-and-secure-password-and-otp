const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("<h1>you are at the home page</h1>");
    } else if (req.url == "/about") {
        res.end("<h1>you are at the about page</h1>");
    } else if (req.url == "/contacts") {
        res.end("<h1>you are at the contacts page</h1>");
    }
    else if (req.url == "/jsondata") {
        fs.readFile(`${__dirname}/EmployeeData.json`, "utf-8", (err, data) => {
            res.end(data);
            console.log(data);
            console.log("Success read file");
        })
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404-ERROR page not found means page doesn't exist</h1>");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port number 8000");
})