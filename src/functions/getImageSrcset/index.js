const getImageSrcset = (imageList) => {
  if (!imageList) return;

  const imageListCopy = { ...imageList };

  delete imageListCopy.default;

  const entries = Object.entries(imageListCopy);
  const result = entries.map((image) => `${image[1]} ${image[0]}w`);

  return result.join(',');
};

export default getImageSrcset;
