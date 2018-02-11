const initialState = {
  categoryData: [],
  loading: false,
  selectedCategory: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_DATA':
      console.log('clearing data');
      return { ...state, categoryData: [] };

    case 'APPEND_DATA':
      return {
        ...state,
        categoryData: state.categoryData.concat(action.data),
      };

    default:
      return state;
  }
};
