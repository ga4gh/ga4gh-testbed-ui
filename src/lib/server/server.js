import express from 'express';
import config from './config';
import configRoutes from './routes/configRouter';
import uiRouter from './routes/uiRouter';

let app = express();

app.use("/api/config", configRoutes);
app.use("/", uiRouter);

app.use(express.static('./public'))

app.listen(config.port, () => {
    console.log(`Server has started on port ${config.port}`);
})