import express from "express";
import cors from "cors";
import pino from 'pino-http';

import { env } from './utils/env.js';

import { getContacts, getContactById } from "./services/contact-services.js";

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

    app.get("/contacts", async (req, res) => {
        const data = await getContacts();

        res.json({
            status: 200,
            message: "Successfully found contacts!",
            data,
        });
    });


    app.get("/contacts/:contactId", async (req, res) => {
        try {
             const { contactId } = req.params;

        const data = await getContactById(contactId);

        if (!data) {
            return res.status(404).json({
                message: 'Contact is not found!'});
         };


        res.json({
            status: 200,
            message: `Successfully found contact with id ${contactId}!`,
            data,
        });
        } catch (error) {
            if (error.message.includes("Cast to ObjectId failed")) {
                error.status = 404;
            }
            const { status = 500 } = error;

            res.status(status).json({
                message: error.message,
            });
        }
    });

    app.get((req, res) => {
        res.status(404).json(
            { message: "Not found" }
        );
    });
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

export default setupServer;
