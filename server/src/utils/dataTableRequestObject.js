export const dataTableRequestObject = (dataTableRequest) => {
  const {
    pageStart = 0,
    pageSize = 10,
    sortElement = "createdAt",
    sortDirection = "desc",
    filters = {},
  } = dataTableRequest;

  const where = { isDeleted: false };
  if (Object.keys(filters).length > 0) {
    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value) {
        if (typeof value === "string") {
          where[key] = {
            contains: value,
            mode: "insensitive",
          };
        } else {
          where[key] = value;
        }
      }
    });
  }
  return {
    skip: pageStart,
    take: pageSize,
    orderBy: {
      [sortElement]: sortDirection,
    },
    where,
  };
};
