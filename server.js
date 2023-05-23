'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const pg = require('pg'); // Require the Postgres 
const client = new pg.Client(process.env.DBURL); // Create a new Client from the Postgress that will take the database url (configuration url contains server, username, port number, database name)

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3050;



 function handleAddMovieDB(req, res, next) {
    const userInput = req.body;
    const sql = `insert into movie_libarys(title, poster_path, image, comments) values($1, $2, $3, $4) returning *`;
  
    const handleValueFromUser = [
      userInput.title,
      userInput.poster_path,
      userInput.image,
      userInput.comments
    ];
  
    client
      .query(sql, handleValueFromUser)
      .then((data) => {
        res.status(201).json(data.rows);
      })
      .catch((err) => {
        errorHandler(err, req, res, next);
      });
  }
  

app.post("/addMovie", handleAddMovieDB);


client.connect().then((con) => {
    console.log(con);
    app.listen(PORT, () => {
      console.log(`Up and Running on port ${PORT}`);
    });
  });