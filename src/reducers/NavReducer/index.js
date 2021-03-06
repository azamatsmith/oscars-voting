// import { NavigationActions } from 'react-navigation';
import { AppNavigator } from 'src/navigators';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('GroupJoinCreateScreen')
);

export default (state = initialState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state);
  switch (action.type) {
    // MTS - Leaving this here as an example
    // case 'Login':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.back(),
    //     state
    //   );
    //   break;
    default:
      nextState || state;
      break;
  }
  return nextState || state;
};
