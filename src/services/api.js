import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const keyAPI = '28549045-19dd42d100d5a5d31ac498ed5';
// const itemsType = photo;
// const itemsOrientation = horizontal;
// const itemsPerPage = 12;

export const getData = async (number, filter) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${filter}&page=${number}&key=${keyAPI}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
