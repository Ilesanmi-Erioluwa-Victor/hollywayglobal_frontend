import { useEffect, useState } from 'react';

import { User } from 'src/store/user/types';

import { useAppDispatch } from 'src/redux/hooks';

import { userAction } from 'src/redux/slices/user';

export const UserAuth = () => {
  const dispatch = useAppDispatch();

  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userInfo') as string);
    if (storedData) {
      (async () => {
        try {
          const resultUserAction = await dispatch(userAction(storedData));
          if (userAction.fulfilled.match(resultUserAction)) {
            if (resultUserAction?.payload.status === 'success') {
              setUserInfo(resultUserAction?.payload?.data as User);
            }
          }
        } catch (error: any) {
          throw error;
        }
      })();
    }
  }, []);

  return { userInfo };
};
