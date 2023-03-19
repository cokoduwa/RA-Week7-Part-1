import http from "http";

const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url)
    res.write("Hello server")
    res.end()

}).listen(8000, console.log("Server is listening on port" + 8000))