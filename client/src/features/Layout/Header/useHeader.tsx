import { useDispatch, useSelector } from 'react-redux';
import { setLoginStatus } from '../../../store/reducers/loginReducer';
import { RootState } from '../../../types/redux';

const useHeader = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state: RootState) => state.loginReducer.loginStatus);
  function logout() {
    dispatch(setLoginStatus('no-authenticated'));
  }
  return {
    logout,
    loginStatus,
  };
};
export default useHeader;
