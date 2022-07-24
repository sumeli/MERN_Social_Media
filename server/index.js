import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoutes from './Routes/AuthRoute.js';
import UserRoutes from './Routes/UserRoute.js';
import PostRoutes from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';

const app = express();

app.use(express.static('public'));
app.use('/images', express.static("images"));

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
dotenv.config();

// app.get('/', (req, res) => {
//     res.send('APP IS RUNNING')
// })


mongoose.connect(
    process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`)))
    .catch((error) => console.log(error));


//!Use of Routes

app.use('/auth', AuthRoutes);
app.use('/user', UserRoutes);
app.use('/post', PostRoutes);
app.use('/upload', UploadRoute);

