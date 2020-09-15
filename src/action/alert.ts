import { CLOSE_ALERT, OPEN_ALERT } from 'action/type/alert';

export const openAlert = ({ value }: { value: string }) => {
  return {
    type: OPEN_ALERT,
    payload: {
      value,
    },
  };
};

export const closeAlert = () => {
  return { type: CLOSE_ALERT };
};
