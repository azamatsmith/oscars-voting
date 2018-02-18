import {fetchCategoryData} from 'src/actions';

describe('CategoryDataActions', () => {
  const getState = () => null;
  const dispatch = jest.fn();

  it('should have a fetchCategoryData action', () => {
    expect(fetchCategoryData).toBeDefined();
  });

  it('fetchCategoryData', () => {
    expect(fetchCategoryData).toBeDefined();
    expect(dispatch).toHaveBeenCalledTimes(0);
    fetchCategoryData(3)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
