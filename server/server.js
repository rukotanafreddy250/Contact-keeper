const express = require('express');

const app = express();


const ConnectDB = require("./config/db");

// db connection configurations
ConnectDB();

app.use(express.json({ extended: false }));

// app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/authRouter')); 
app.use('/api/v1/users', require('./routes/usersRouter'));
app.use('/api/v1/contacts', require('./routes/contactsRouter'));



app.use("", (req, res, next) => { 
    res.send(" Page Not Found "); 
    next();
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
});