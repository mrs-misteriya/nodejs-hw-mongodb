
const parseSortParams = ({ sortBy, sortOrder }, fieldList) => {
    const parsedSortOrders = ['asc', 'desc'].includes(sortOrder)? sortOrder : "asc";
    const parsedSortBy = fieldList.includes(sortBy)? sortBy : "name";

    return {
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrders };
};

export default parseSortParams;
