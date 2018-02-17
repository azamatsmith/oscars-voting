const initialState = {
  categoryData: [],
  loading: false,
  selectedCategory: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_DATA':
      return { ...state, categoryData: [] };

    case 'UPDATE_CATEGORY_DATA':
      return { ...state, loading: false, categoryData: action.categoryData };

    case 'UPDATE_LOADING':
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};
