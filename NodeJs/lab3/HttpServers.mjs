import {createServer} from "http";
import {FileHandler} from "./utilities/FileHandler.mjs";
import {UsersServices} from "./services/UsersServices.mjs";


export class HttpServers {
    static PORT = 8000;


    static startServer() {
        createServer((req, res) => {
            // handling Sign-up
            if (req.method === 'POST' && req.url === '/sign-up') {
                let body = [];
                req.on('data', (chunkOfData) => {
                    body.push(chunkOfData);
                }).on("end", () => {
                    let bodyResponse = Buffer.concat(body).toString();
                    let bodyResponseJSON = JSON.parse(bodyResponse);
                    let result = UsersServices.signUp(bodyResponseJSON);
                    res.writeHead(200, {'content-type': 'application/json'});
                    res.write(JSON.stringify(result));
                    res.end();
                })
            }

            // handling Login
            else if (req.method === 'POST' && req.url === '/login') {
                let body = []
                req.on('data', (chunkOfData) => {
                    body.push(chunkOfData);
                }).on("end", () => {
                    let bodyResponse = Buffer.concat(body).toString();
                    let bodyResponseJSON = JSON.parse(bodyResponse);
                    let result = UsersServices.login(bodyResponseJSON);
                    res.writeHead(200, {'content-type': 'application/json'});
                    res.write(JSON.stringify(result));
                    res.end();
                })
                console.log("hello from login");
                res.end("ty login");
            }

            // handling home
            else if (req.method === 'GET' && (req.url === '/' || req.url === "/home")) {
                res.writeHead(200, {'content-type': 'text/html'});
                console.log("hello from home page");
                res.write(`
                            <h1> Hello From Home </h1>
                            <title>home page</title>
                        `)
                res.end("ty sign-up");
            }

            // get all users
            else if (req.method === 'GET' && req.url === "/users") {
                console.log("hello from users");
                res.writeHead(200, {'content-type': 'application/json'});
                let users = UsersServices.getUsers();
                res.write(JSON.stringify(users));
                res.end();
            }
            // get one user
            else if (req.method === 'POST' && req.url === "/user") {
                let dataChunks = [];
                req.on('data', (chunks) => {
                    dataChunks.push(chunks);
                }).on('end', () => {
                    let payload = Buffer.concat(dataChunks).toString();
                    let result = UsersServices.findUserByName(JSON.parse(payload).name);
                    console.log(payload);
                    res.writeHead(200, {'content-type': 'application/json'});
                    res.write(JSON.stringify(result));
                    res.end();
                });
            }

        }).listen(8000, () => {
            console.log("Server Loading.....");
            console.log(`server running on port ${this.PORT} http://localhost:${this.PORT}`);
        });
        // res.writeHead(200,{'content-type':'text/html'});
        // {name:ahmed}
    }
}