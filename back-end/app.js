const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const postModel = require("./models/jobs")

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect(
  "mongodb+srv://adhy:<password>@cluster0.v6yc0yl.mongodb.net/jobPost"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("Mongo error:", err.message))

// addJobApi
app.post("/jobs", async (req, res) => {
  try {
    const input = new postModel(req.body)
    await input.save()
    res.json({ "job posted": true })
  } catch (err) {
    res.json({ "error": "job posting" })
  }
})

// viewJobsApi
app.get("/viewjobs",async (req, res) => {
    postModel.find().then(
        items=>{
            res.json(items)
        }
    ).catch(
        err=>{
            res.json({"error": "viewing jobs"})
        }
    )
})

// server
app.listen(3030, () => {
  console.log("server is running on port 3030")
})
