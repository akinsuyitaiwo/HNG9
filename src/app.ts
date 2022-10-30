import express from "express";
import cors from "cors";
import { formatInterface } from "./utils/interface"
import { errorResponse, handleError } from "./utils/responses"

const app = express()
const port = 3000;
app.use(cors())
app.use(express.json());



app.get("/", (req, res) => {
    try {
        const details: formatInterface = {
            slackUsername: "Akinsuyi Taiwo",
            backend: true,
            age: 25,
            bio: `I am a backend developer(nodejs). Asides coding i enjoy playing football and video games. I'm looking forward to getting better with being a developer.`
        }
        return res.json(details)
    } catch (error) {
        handleError(error, req)
        return errorResponse
    }
});

app.listen(3000, () => {
    console.log(`app is listening on ${port}`)
})

export default app;