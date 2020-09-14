import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'reducer';

const useUserInfo = () => {
  const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

  const { name, isLogin, role } = typedUseSelector((state: RootState) => {
    return state.user;
  });

  return { isLogin, name, role };
};

export default useUserInfo;
