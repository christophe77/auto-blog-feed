require("dotenv").config();
const ClientApi = require("freeimage.js");

const { FREE_IMAGE_API_KEY } = process.env;

const api = new ClientApi({
  key: FREE_IMAGE_API_KEY,
});

async function upload(imageUrl) {
  const returnImageUrl = await api.upload(imageUrl);
  return returnImageUrl;
}
const pictures = {
  upload,
};
module.exports = pictures;
