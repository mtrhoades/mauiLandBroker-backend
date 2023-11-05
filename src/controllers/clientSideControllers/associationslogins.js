const associationslogins = require("express").Router();
const mongoose = require('mongoose');
const Association = require('../../models/Association'); // requiring models to use schema - Association

// Define the POST route to handle association logins
associationslogins.post('/', async (req, res) => {
    const { username, password, associationId } = req.body;
  
    try {
      // Find the association based on associationId
      const association = await Association.findById(associationId);
  
      if (!association) {
        return res.status(404).json({ message: 'Association not found' });
      }
  
      // Check if the provided username and password match the association's data
      if (username === association.username) {
        const isMatch = await new Promise((resolve, reject) => {
            association.comparePassword(password, (passwordErr, match) => {
                if (passwordErr || !match) {
                    reject(new Error('Invalid password'));
                } else {
                    resolve(match);
                    console.log(match); // true
                }
            });
        })
        console.log('Login Successful!!!')
        // Authentication successful
        return res.status(200).json({ message: 'Login successful', association });
      } else {
        // Authentication failed
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Login error' });
    }
  });

module.exports = associationslogins;