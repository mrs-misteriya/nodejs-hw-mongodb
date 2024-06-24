import { getContacts, getContactById } from "../services/";
import createHttpError from 'http-errors';


export const getContactsController = async (req, res) => {
    const data = await getContacts();

    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data,
    });
};


export const getContactByIdController = async (req, res, next) => {
    const { contactId } = req.params;

    const contact = await getContactById(contactId);

    if (!contact) { next(createHttpError(404, 'Contact not found'));
    return;
    }

    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        contact,
    });
};

