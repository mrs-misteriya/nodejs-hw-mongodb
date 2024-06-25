import { Router } from "express";
import { createContactsController, deleteContactController, getContactByIdController, getContactsController, patchContactController } from "../controllers/contacts.js";

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import isValidId from "../middlewares/isValidId.js";

const router = Router();

router.get("/", ctrlWrapper(getContactsController));

router.get("/:contactId", isValidId, ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(createContactsController));

router.patch('/:contactId', isValidId, ctrlWrapper(patchContactController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));



export default router;
