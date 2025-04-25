const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

/**
 * Upload image to imgbb
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * @param {Buffer} buffer Image Buffer
 */
module.exports = async (buffer, apiKey) => {
  const { ext, mime } = (await fromBuffer(buffer)) || {};
  if (!ext || !mime) throw new Error("Unsupported file type");

  const form = new FormData();
  form.append("image", buffer.toString("base64")); // Convert buffer to base64

  try {
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, form, {
      headers: form.getHeaders(),
    });

    if (!data || !data.success) throw new Error("Failed to upload image");
    return data.data.url; // Return the image URL
  } catch (error) {
    throw error;
  }
};
