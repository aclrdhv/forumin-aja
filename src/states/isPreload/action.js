import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { setAuthUserActionCreator } from '../authUser/action';
import api from '../../utils/api';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD'
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload
    }
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
    // setTimeout(() => dispatch(hideLoading()), 1000);
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess
};