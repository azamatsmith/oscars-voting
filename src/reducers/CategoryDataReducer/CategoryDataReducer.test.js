import reducer from './';

describe('CategoryDataReducer', () => {
  let state = null;

  it('should return the initial state', () => {
    state = reducer(undefined, {});
    expect(state).toEqual({
      categoryData: [],
      loading: false,
      selectedCategory: null,
    });
  });

  it('should be able to update categoryData with an action', () => {
    const action = {
      type: 'UPDATE_CATEGORY_DATA',
      categoryData: ['one', 'two'],
    };

    state = reducer(state, action);
    expect(state.categoryData).toEqual(action.categoryData);
  });

  it('should be able to clear categoryData with an action', () => {
    const action = {
      type: 'CLEAR_DATA',
    };

    state = reducer(state, action);
    expect(state.categoryData).toEqual([]);
  });

  it('should be able to update loading', () => {
    const action = {
      type: 'UPDATE_LOADING',
      loading: true,
    };

    expect(state.loading).toEqual(false);
    state = reducer(state, action);
    expect(state.loading).toEqual(true);
  });
});
