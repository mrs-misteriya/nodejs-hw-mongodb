import { Router } from "express";
import { createContactsController, deleteContactController, getContactByIdController, getContactsController, patchContactController } from "../controllers/contacts.js";

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../utils/validateBody.js";

import { contactsAddSchema, contactsUpdateSchema } from "../validation/contacts-schemas.js";

const router = Router();

router.get("/", ctrlWrapper(getContactsController));

router.get("/:contactId", isValidId, ctrlWrapper(getContactByIdController));

router.post('/', validateBody(contactsAddSchema), ctrlWrapper(createContactsController));

router.patch('/:contactId', isValidId, validateBody(contactsUpdateSchema), ctrlWrapper(patchContactController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));



export default router;
