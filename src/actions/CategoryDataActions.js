import axios from 'axios';
import { categories } from 'src/utils/data';

// MTS - id corresponds with the index of each category
export const fetchCategoryData = id => dispatch => {
  const API_URI = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

  // clear out data from previous category
  dispatch({ type: 'CLEAR_DATA' });

  const { items } = categories[id];

  // TODO: Remove this once all items have data
  if (!items) {
    // eslint-disable-next-line
    return console.error('no items to fetch');
  }

  // fetch data for each item in the category
  items.forEach(item => {
    const uri = `${API_URI}&i=${item}`;
    axios
      .get(uri)
      .then(({ data }) => {
        dispatch({ type: 'APPEND_DATA', data });
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err, 'could not get data for ', item);
      });
  });
};
