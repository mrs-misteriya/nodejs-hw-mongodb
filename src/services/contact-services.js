import Contact from "../db/models/Contact.js";

export const getContacts = () => Contact.find();

export const getContactById = (contactId) => Contact.findById(contactId);

export const createContact = async (payload) => {
   const contact = await Contact.create(payload);
   return contact;
};

export const updateContact = async (contactId, payload) => {
  const rawResult = await Contact.findOneAndUpdate(
    { _id: contactId },
    payload);

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};


export const deleteContact = async (contactId) => {
    const deletingContact = await Contact.findOneAndDelete({
        _id: contactId,
    });

    return deletingContact;
};
