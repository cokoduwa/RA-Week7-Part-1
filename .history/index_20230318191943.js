import http from "http";

const server = http.createServer((req, res) => {
    res.write("Hello server")
    res.end()

}).listen(8000, console.log("Server is listening on port" + 8000))