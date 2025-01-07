const replacer = (key, value) => {
  return typeof value === "bigint" ? value.toString() : value;
};

export const processedResponse = (result) => {
  const serializedJobPosts = JSON.stringify(result, replacer, 2);
  return JSON.parse(serializedJobPosts);
};
