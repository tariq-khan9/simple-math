const db = require('./database');

// SQL query to create a users table
const createUsersTable = `
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

db.query(createUsersTable, null, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log("Users table created successfully");
  }
});
