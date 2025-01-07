import axios from 'axios';

export const checkImageAvailability = async (imageUrl: string) => {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    return response.status === 200 && response.headers['content-type']?.startsWith('image/');
  } catch (err) {
    return false;
  }
};
