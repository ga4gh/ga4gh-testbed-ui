import path from 'path';
import express from 'express';
import configRoutes from './routes/configRouter';
import config from './config';

let app = express();
app.use("/api/config", configRoutes);
app.use(express.static('public'))
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
})

app.listen(config.port, () => {
    console.log(`Server has started on port ${config.port}`);
})