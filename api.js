const client = require('connection.js');
const express = require ('express');
const app = express();

app.listen(3300, ()=>{
    SVGComponentTransferFunctionElement.log("Sever is now listening at port 3300");
})
client.connect();

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

app.get('/author_books', (req, res)=>{
    client.query('Select * from author_books', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/author_books', (req, res)=>{
    client.query('Select * from userusers where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.get('/author_books/:id', (req, res)=>{
    client.query('Select * from users where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.post('/author_books', (req, res)=>{
    const author_books = req.body;
    let insertQuery = `insert into author_books (createdAt, updatedAt, author_id, book_id)
                        values('${author_books.createdAt}','${author_books.updatedAt}', 
                        ${author_books.author_id}, ${author_books.books_id})`
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
    else{console.log(err.message)}
    })
    client.end;
})

app.get('/authors', (req, res)=>{
    client.query('Select * from authors', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/authors', (req, res)=>{
    client.query('Select * from authors', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/authors', (req, res)=>{
    client.query('Select * from userusers where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.get('/authors/:id', (req, res)=>{
    client.query('Select * from users where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.post('/authors', (req, res)=>{
    const author_books = req.body;
    let insertQuery = `insert into authors (id, name, createdAt, updatedAt)
                            values(${authors.id}, '${authors.name}', '${authors.createdAt}','${authors.updatedAt}')`
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
    else{console.log(err.message)}
    })
    client.end;
})

app.get('/book_rents', (req, res)=>{
    client.query('Select * from book_rents', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/book_rents', (req, res)=>{
    client.query('Select * from book_rents', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/book_rents', (req, res)=>{
    client.query('Select * from userusers where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.get('/book_rents/:id', (req, res)=>{
    client.query('Select * from users where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.post('/book_rents', (req, res)=>{
    const author_books = req.body;
    let insertQuery = `insert into book_rents (person_id, book_id, createdAt, updatedAt)
                    values(${book_rents.people_id}, ${book_rents.book_id}, '${book_rents.createdAt}','${book_rents.updatedAt}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
    else{console.log(err.message)}
    })
    client.end;
})

app.get('/books', (req, res)=>{
    client.query('Select * from books', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

client.connect();

app.get('/books', (req, res)=>{
    client.query('Select * from books', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/books', (req, res)=>{
    client.query('Select * from userusers where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.get('/books/:id', (req, res)=>{
    client.query('Select * from users where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.post('/books', (req, res)=>{
    const books = req.body;
    let insertQuery = `insert into books  (id, name, createdAt, updatedAt)
                        values(${books.id}, '${books.name}', '${books.createdAt}','${books.updatedAt}')`
                       
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
    else{console.log(err.message)}
    })
    client.end;
})

app.get('/people', (req, res)=>{
    client.query('Select * from author_books', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/people', (req, res)=>{
    client.query('Select * from people', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/people', (req, res)=>{
    client.query('Select * from userusers where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.get('/people/:id', (req, res)=>{
    client.query('Select * from users where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
   client.end;
})

app.post('/people', (req, res)=>{
    const people = req.body;
    let insertQuery = `insert into people (id, name, createdAt, updatedAt)
                        values(${people.id}, '${people.name}', '${people.createdAt}','${people.updatedAt}')`
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
    else{console.log(err.message)}
    })
    client.end;
})
