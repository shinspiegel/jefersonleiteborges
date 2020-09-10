/**
 * This will return a string with all image source sets.
 * @param {import("../context/initialState").SourceSet[]} imageList
 */
const getImageSrcset = (imageList) => {
  if (!imageList) return;

  return imageList.map((img) => `${img.image} ${img.size}w`).join(',');
};

export default getImageSrcset;
