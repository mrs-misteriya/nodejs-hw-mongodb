import { Router } from "express";
import { createContactsController, deleteContactController, getContactByIdController, getContactsController, patchContactController } from "../controllers/contacts.js";

import { ctrlWrapper } from '../utils/ctrlWrapper.js';


const router = Router();

router.get("/contacts", ctrlWrapper(getContactsController));

router.get("/contacts/:contactId", ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactsController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));



export default router;
