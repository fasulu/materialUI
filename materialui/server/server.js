const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const app = express()

const { uniqueNamesGenerator, names, languages, countries } = require("unique-names-generator");

// fake address generator can be created by fakerator.js which can be installed from npmjs.com by npm install fakerator
// var Fakerator = require("fakerator");    // require fakerator
// var fakerator = Fakerator("de-DE");      // assign country
// var name = fakerator.names.name();   // to create only name
// fakerator.entity.user()              // to create address

const persons = [];

for (let i = 0; i < 9; i++) {

    persons.push({
        firstname: uniqueNamesGenerator({ dictionaries: [names] }),
        language: uniqueNamesGenerator({ dictionaries: [languages] }),
        countries: uniqueNamesGenerator({ dictionaries: [countries] }),
    });
}

mongoose.connect("mongodb://localhost:27017/materialdb", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the materialdb database");
    }
});

const personSchema = new mongoose.Schema({
    firstname: { type: String, unique: true },
    language: { type: String, unique: false },
    countries: { type: String, unique: false }
})

const Person = mongoose.model("Person", personSchema)

const port = 9005
app.use(express.json())
app.use(cors())

app.get("/namelist", async (req, res) => {
    
    try {
        console.log("Im in name list", req.body)

        const nameList = await Person.find().lean();

        console.log(nameList);

        res.json({
            message:"Data passed successfully",
            nameList
        })

    } catch (error) {
        console.log(error)
    }
})

app.post("/addinfo", async (req, res) => {

    // TODOS: currently adding information without validation, later update with validation
    try {
        
        console.log("body information", req.body);
    
        const addInfo = await Person.create({
            firstname: req.body.firstname,
            language: req.body.language,
            countries: req.body.countries
        })
    
        res.json({message: "Information added successfully", addInfo})

    } catch (error) {
        console.error(error)
        res.status(400).json({
            messageError: "Error while adding information",
            error
        })  
    }

})

const deletedAllThenAdd = async () => {
    try {
        await Person.deleteMany({})

        console.log("All deleted")

        const dataAdded = await Person.insertMany(persons)

        console.log("OK, ", dataAdded);

        const result = await Person.aggregate([
            {
                $group: {
                    _id: "$firstname",
                    num: { $sum: 1 }
                }
            },
            {
                $match: {
                    num: { $gt: 1 }
                }
            }
        ])

        console.log(result.length ? "There are repeated namelist!!" : "No repeated name")

    } catch (error) {
        console.log(error)
    }
}

// deletedAllThenAdd();     // to change data in the collection de-comment this line

app.listen(port, () => {
    console.log(`Connected through port ${port}`);
})