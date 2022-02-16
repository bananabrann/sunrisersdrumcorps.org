require("dotenv").config();
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: process.env.DB_ADMIN,
      password: process.env.DB_PASS,
    },
    type: "default",
  },
  server: process.env.DB_SERVER,
  options: {
    database: process.env.DB_NAME,
    encrypt: true,
  },
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("db connection established, test complete");
    // queryDatabase()
    connection.close();
  }
});

connection.connect();

/*
function queryDatabase() {
  // Read all rows from table
  const request = new Request(
    `SELECT TOP 5 * FROM [dbo].[News]`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request); 
}
*/
