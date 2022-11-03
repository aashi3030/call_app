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
//get 
app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

       connection.query('SELECT * from call_history_table', (err,rows) => {
            connection.release()


            if(!err)
            {
                res.send(rows)
            }
            else
            {
                console.log(err)
            }
        })
    })
    
})
//get table by history table from user id

app.get('/:user_id', (req,res) => {
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
        console.log('the data from call history table are : \n', rows);
        })
    })
})
app.listen(port, () => console.log(`Listen on port ${port}`))
