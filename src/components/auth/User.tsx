import { useEffect, useState } from 'react';

import { User } from 'src/store/user/types';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import { userAction } from 'src/redux/slices/user';

export const UserAuth = () => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.user);

  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    if (data) {
      (async () => {
        try {
          const resultUserAction = await dispatch(userAction(data));
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
  }, [data]);
  return { userInfo };
};
