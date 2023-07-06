const express = require("express");
const sql = require("mssql/msnodesqlv8");
const bodyParser = require('body-parser');

const app = express();
app.use("/assets", express.static("assets"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.urlencoded({ extended: false }));

const config = {
  server: 'DESKTOP-G6JVIC3\\SQL2019STD',
  database: 'JavaBase',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
}

// Connect to the database
const connection = new sql.ConnectionPool(config);
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the SQL Server:', err);
    return;
  }
  console.log('Connected to the SQL Server');
});


app.post('/insertproducts', (req, res) => {
  const product = {
      Product_Name: req.body.Product_Name,
      Category: req.body.Category,
      SubCategory: req.body.SubCategory,
      Description: req.body.Description,
      Brand: req.body.Brand,
      Price: req.body.Price,

  };

 
  connection.query('INSERT INTO products SET ?', product, (err, result) => {
      if (err) {
          console.error('Error inserting product into the database: ', err);
          return;
      }
      console.log('Product inserted successfully.');
      res.redirect('/ProductList');
  });
});



app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.request().query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Error retrieving data from the database');
      return;
    }
    res.json(results.recordset);
  });
});


app.get('/Categories', (req, res) => {
  const query = 'SELECT * FROM Categories';
  connection.request().query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Error retrieving data from the database');
      return;
    }
    res.json(results.recordset);
  });
});


app.get('/SubCategories', (req, res) => {
  const query = 'SELECT * FROM SubCategories';
  connection.request().query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Error retrieving data from the database');
      return;
    }
    res.json(results.recordset);
  });
});



app.get('/Info_User', (req, res) => {
  const query = 'SELECT * FROM Info_User';
  connection.request().query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Error retrieving data from the database');
      return;
    }
    res.json(results.recordset);
  });
});

  

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});


app.get('/ProductList', (req, res) => {
  res.sendFile(__dirname + "/ProductList.html");
});


app.get('/Category', (req, res) => {
  res.sendFile(__dirname + "/Category.html");
});


app.get('/SubCategory', (req, res) => {
  res.sendFile(__dirname + "/SubCategory.html");
});


app.get('/Brands', (req, res) => {
  res.sendFile(__dirname + "/Brand.html");
});

app.get('/Info_Use', (req, res) => {
  res.sendFile(__dirname + "/Admin.html");
});



// Logout endpoint
app.get("/logout", (req, res) => {
  res.redirect("/");
});


// Logout endpoint
app.get("/Dashboard", (req, res) => {
  res.redirect("/");
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM Info_User WHERE Username = '${username}' AND Password = '${password}'`;
  connection.request().query(query, (err, recordset) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send("Server error");
      return;
    }

    if (recordset.recordset.length > 0) {
      res.redirect("/index"); // Redirect to the dashboard page
    } else {
      res.redirect("/?error=1"); // Redirect back to the login page with an error notification
    }
  });
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
