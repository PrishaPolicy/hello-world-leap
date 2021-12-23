import chalk from "chalk"
import express from "express"
import axios from "axios"
const app = express()
app.get(
    "/",(req,res)=>{
        chalk.blue("blue text")
        return res.send("hellllloooo")
    }
)

app.get("/nested-route",(req,res)=>{
    return res.send("this is nested route")
})

app.get("/networked-route",async (req,res)=>{

    const resp = await axios.get("https://api.covidtracking.com/v1/states/info.json")
    return res.send(JSON.stringify(resp.data))
})
app.listen(3000);