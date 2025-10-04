const http = require('http');
// const { text } = require('stream/consumers');

// const server = http.createServer((req, res ) => {
//     res.writeHead(200, {'content-type': 'text/plain' });
//     res.end('hello world\n');
// })

// server.listen(3000, ()=>{
//     console.log('server running at http://localhost:3000');
// })

const server = http.createServer((req, res)=>{
    if (req.url ==="/"){
        res.writeHead(200, {'content-type': 'text/plain' });
        res.end('hello world\n');
    }
    else if (req.url ==="/api/courses"){
        const user = {
            name : 'sachin',    
            age : 24,
            city : 'pune',
            skills : ['java','python','javascript'],
            isActive : true
        }
        res.writeHead(200, {'content-type': 'application/json' });
        res.end(JSON.stringify(user));
    }
})

server.listen(3000, ()=>{
    console.log('server running at http://localhost:3000');
})