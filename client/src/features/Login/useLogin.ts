import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setLoginStatus } from '../../store/reducers/loginReducer';

const useLogin = () => {
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };
  const checkPassword = () => {
    dispatch(setLoginStatus('checking'));
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      dispatch(setLoginStatus('authenticated'));
    } else {
      dispatch(setLoginStatus('no-authenticated'));
    }
  };
  return {
    checkPassword,
    handlePasswordChange,
    password,
  };
};
export default useLogin;
