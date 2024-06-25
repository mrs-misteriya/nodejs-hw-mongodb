import Contact from "../db/models/Contact.js";

export const getContacts = () => Contact.find();

export const getContactById = (contactId) => Contact.findById(contactId);

export const createContact = (data) => {
   const contact = Contact.create(data);
   return contact;
};

export const updateContact = async (contactId, payload, options = {} ) => {
  const rawResult = await Contact.findOneAndUpdate({ _id: contactId }, payload, {
    new: true,
    includeResultMetadata: true,
    ...options
  });

  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};


export const deleteContact = async (contactId) => {
    const deletingContact = await Contact.findOneAndDelete({
        _id: contactId,
    });

    return deletingContact;
};
