import axios from 'axios';
import { categories } from 'src/utils/data';
import firebase from 'firebase';

// MTS - id corresponds with the index of each category
export const fetchCategoryData = id => dispatch => {
  // clear out data from previous category
  dispatch({ type: 'CLEAR_DATA' });

  // items is an array of ids
  const { items } = categories[id];
  const type = items[0].slice(0, 2) === 'nm' ? 'people' : 'movies';

  firebase
    .database()
    .ref(`/${type}`)
    .once('value')
    .then(snapshot => {
      const result = snapshot.val();
      const data = Object.keys(result).map(key => ({
        ...result[key],
        id: key,
      }));
      const filteredData = data.filter(obj => items.indexOf(obj.id) >= 0);
      dispatch({ type: 'UPDATE_CATEGORY_DATA', categoryData: filteredData });
    })
    // eslint-disable-next-line
    .catch(err => console.log('error fetching category data', err));
};
