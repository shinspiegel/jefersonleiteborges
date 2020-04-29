const getImageSrcset = (originalObject) => {
  const object = { ...originalObject };

  delete object.default;

  const entries = Object.entries(object);
  const result = entries.map((o) => `${o[1]} ${o[0]}w`);

  return result.join(',');
};

export default getImageSrcset;
