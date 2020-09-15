import { RootState } from 'reducer';

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('test');

    if (!serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('test', serializedState);
  } catch (error) {
    console.log(error);
  }
};

export const initialState = () => {
  sessionStorage.removeItem('test');
};
