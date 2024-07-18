import Contact from "../db/models/Contact.js";
import calcPaginationData from "../utils/calcPaginationData.js";

export const getContacts = async ({ page, perPage, sortBy= 'name', sortOrder= 'asc' }) => {
  const skip = (page - 1) * perPage;
  const totalItems = await Contact.countDocuments();
  const data = await Contact.find().skip(skip).limit(perPage).sort({[sortBy]: sortOrder});
  const { totalPages, hasPreviousPage, hasNextPage } = calcPaginationData({page, perPage, total: totalItems});

  return { data, page, perPage, totalItems, totalPages, hasPreviousPage, hasNextPage };
};

export const getContactById = (contactId) => Contact.findById(contactId);

export const createContact = (data) => {
   const contact = Contact.create(data);
   return contact;
};

export const updateContact = async (contactId, payload, options = {} ) => {
  const rawResult = await Contact.findOneAndUpdate({ _id: contactId }, payload, {
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
