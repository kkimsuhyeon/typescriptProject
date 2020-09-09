import { initializeInput, changeInput } from 'action/signin';
import { INITIALIZE_INPUT, CHANGE_INPUT } from 'action/type/signin';

type SigninAction =
  | ReturnType<typeof changeInput>
  | ReturnType<typeof initializeInput>;

type SigninState = {
  form: {
    id: string;
    password: string;
  };
};

const initialState: SigninState = {
  form: { id: '', password: '' },
};

const signin = (state: SigninState = initialState, action: SigninAction) => {
  switch (action.type) {
    case INITIALIZE_INPUT: {
      return { ...state, form: { id: '', password: '' } };
    }

    case CHANGE_INPUT: {
      const newForm = { ...state.form };
      newForm[action.payload.name] = action.payload.value;
      return { ...state, form: newForm };
    }

    default:
      return state;
  }
};

export default signin;
