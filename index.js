const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Survey Tracker API is running!");
});

app.get("/:status", (req, res) => {
    const { status } = req.params;
    const { project_id, survey_id } = req.query;

    if (!project_id || !survey_id) {
        return res.status(400).json({ error: "Missing project_id or survey_id" });
    }

    res.json({ message: `Survey ${survey_id} for project ${project_id} marked as ${status}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
