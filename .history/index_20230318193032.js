import http from "http";

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/'){
        res.write("Welcome to the Homepage")
        res.end()
    }

}).listen(8000, console.log("Server is listening on port" + 8000))