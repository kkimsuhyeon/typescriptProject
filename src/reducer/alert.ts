import { CLOSE_ALERT, OPEN_ALERT } from 'action/type/alert';
import { closeAlert, openAlert } from 'action/alert';

type AlertAction = ReturnType<typeof closeAlert> | ReturnType<typeof openAlert>;

type AlertState = {
  isOpen: boolean;
  value: string;
};

const initialState: AlertState = {
  isOpen: false,
  value: '',
};

const alert = (state: AlertState = initialState, action: AlertAction) => {
  switch (action.type) {
    case OPEN_ALERT: {
      return { isOpen: true, value: action.payload.value };
    }
    case CLOSE_ALERT: {
      return { isOpen: false, value: '' };
    }
    default: {
      return state;
    }
  }
};

export default alert;
