import express from "express";
import cors from "cors";
import pino from 'pino-http';

import { env } from './utils/env.js';

import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from "./middlewares/NotFoundHandler.js";


const PORT = Number(env('PORT', '3000'));

const setupServer = () => {
    const app = express();

    const logger = pino({
        transport: {
            target: "pino-pretty"
        }
    });

    app.use(logger);
    app.use(cors());


    app.use(contactsRouter);

    app.use('*', notFoundHandler);

    app.use(errorHandler);

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

export default setupServer;
