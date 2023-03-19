import http from "http";
import fetch from "node-fetch";

const server = http.createServer((req, res) => {
    const url = req.url
    let tableData ="<table border='1'><tr><th>Name</th><th>Height</th><th>Birth Year</th><th>Gender</th><th>Url</th></tr>"
    if (url === '/'){
        res.write("Welcome to the Homepage")
        res.end()
    }
    if (url === '/list') {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                createData(data)
                res.write(tableData)
                res.end()
            })

    function createData(data) {
        data.forEach(element => {
            tableData+=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`
        })
        tableData+=`</table>`
    }

    }
    else {
        res.write("You have reached this page by error")
        res.end()   
    }


}).listen(8000, console.log("Server is listening on port" + 8000))