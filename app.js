const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//mysql  

const pool = mysql.createPool(
    {
        connectionLimit : 10,
        host               : 'localhost',
        user               : 'root',
        password           : '',
        database           : 'call_app'
    }
)

//get all data from user table
app.get('/user_table', (req, res) => { 
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

       connection.query("SELECT * from user_table", (err,rows) => {
            connection.release()


            if(!err)
            {
                res.send(rows)
            }
            else
            {
                console.log(err)
            }
            console.log('the data from user table is : \n',rows);
        })
    })
    
})
// get  data from user table by user id
app.get('/user_table/user_id/:user_id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM user_table where user_id = ?', [req.params.user_id], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from user table are : \n', rows);
        })
    })
})
// get  data from user table by user name
app.get('/user_table/user_name/:user_name', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM user_table where user_name = ?', [req.params.user_name], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from user table are : \n', rows);
        })
    })
})

// get  data from user table by email
app.get('/user_table/user_email/:user_email', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM user_table where user_email = ?', [req.params.user_email], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from user table are : \n', rows);
        })
    })
})

// get  data from user table by mobilenumber
app.get('/user_table/user_mobilenumber/:user_mobilenumber', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM user_table where user_mobilenumber = ?', [req.params.user_mobilenumber], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from user table are : \n', rows);
        })
    })
})


// get  data from user table by status
app.get('/user_table/user_status/:status', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM user_table where status = ?', [req.params.status], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from user table are : \n', rows);
        })
    })
})

///  get data from contact table
app.get('/contact_table', (req, res) => { 
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

       connection.query("SELECT * from contact_table", (err,rows) => {
            connection.release()


            if(!err)
            {
                res.send(rows)
            }
            else
            {
                console.log(err)
            }
            console.log('the data from contact table is : \n',rows);
        })
    })
    
})

//get data from contact table on by contact id 
app.get('/contact_table/contact_id/:contact_id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM contact_table where contact_id = ?', [req.params.contact_id], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from contact table are : \n', rows);
        })
    })
})

//get data from contact table on by user id 
app.get('/contact_table/user_id/:user_id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM contact_table where user_id = ?', [req.params.user_id], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from contact table are : \n', rows);
        })
    })
})

//get data from contact table on by CONTACT NAME 
app.get('/contact_table/contact_name/:contact_name', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM contact_table where contact_name = ?', [req.params.contact_name], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from contact table are : \n', rows);
        })
    })
})

//get data from call_history_table by user_id
app.get('/call_history_table/user_id/:user_id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM call_history_table where user_id = ?', [req.params.user_id], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from history table are : \n', rows);
        })
    })
})


//get data from call_history_table by to contact_id

app.get('/call_history_table/tocontact_id/:tocontact_id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM call_history_table where tocontact_id = ?', [req.params.tocontact_id], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from history table are : \n', rows);
        })
    })
})
//get data from call_history_table by from contact_id

app.get('/call_history_table/fromcontact_id/:fromcontact_id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM call_history_table where fromcontact_id = ?', [req.params.fromcontact_id], (err, rows) => {
            connection.release()
        if(!err)
        {
            res.send(rows)
        }
        else
        {

            console.log(err)
        }
        console.log('the data from history table are : \n', rows);
        })
    })
})

// put data to call history table 
app.post('/call_history_table/sumbit_data', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        const params = req.body
        connection.query('INSERT INTO call_history_table SET ?', params, (err, rows) => {
        connection.release() // return the connection to pool
        if (!err) {
            res.send(`the contact with user id :: ${params.user_id} has been added`)
        } else {
            console.log(err)
        }
        
        })
        console.log(req.body)

    })
});
// sumbit new contact data to contact table
app.post('/contact_table/sign_up', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        const params = req.body
        connection.query('INSERT INTO contact_table SET ?', params, (err, rows) => {
            connection.release() // return the connection pool
            if(!err) {
                res.send(`the contact with user id :: ${params.user_id} has been added`)
            }else {
                console.log(err)
            }
        })
        console.log(req.body)
    })
});

//login 












app.listen(port, () => console.log(`Listen on port ${port}`))