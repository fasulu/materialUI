const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const app = express()

const { uniqueNamesGenerator, names, languages, countries } = require("unique-names-generator");

const persons = [];

var temp;

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

        res.json({nameList})

    } catch (error) {
        console.log(error)
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