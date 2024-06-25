import { getContacts, getContactById, createContact, deleteContact, updateContact } from "../services/contact-services.js";
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


export const createContactsController = async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully created a contact!",
    data: contact,
  });
};

export const patchContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact({ _id: contactId }, req.body);

  if (!result) {
    throw createHttpError(404, "Contact not found");
  }

  res.json({
    status: 200,
    message: "Successfully patched a contact!",
    data: result.data,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await deleteContact(contactId);

  if (!contact) {
    next(createHttpError(404, "Contact not found"));
    return;
  }

  res.status(204).send();
};
