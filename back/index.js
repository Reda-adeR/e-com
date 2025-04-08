const express = require('express')
const pool = require('./db')
const bcrypt = require('bcrypt')
const app =  express()
app.use(express.json());


const createUsersTable = async () => {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password TEXT NOT NULL
      );
    `;
  
    try {
      await pool.query(query);
      console.log('✅ Users table ready');
    } catch (err) {
      console.error('❌ Error creating users table:', err);
    }
  };
  
  
  
  app.post('/signup', async (req, res) => {
      const { username, password } = req.body;
      console.log(req.body)
      try {
          const query = 'SELECT * FROM users WHERE username = $1';
          const result = await pool.query(query, [username]);
          
          if (result.rows.length > 0) {
              res.sendStatus(500, "user already exist")
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const query = `
                INSERT INTO users (username, password)
                VALUES ($1, $2)
                RETURNING id, username;
                `;
                
                const values = [username, hashedPassword];
                
                const result = await pool.query(query, values);
                res.sendStatus(200)
                
                
            }
        }
        catch (err)
        {
            console.log("error is :", err);
            
        }
        
    })
    
    createUsersTable();
    app.listen(3000), console.log("server start ................")