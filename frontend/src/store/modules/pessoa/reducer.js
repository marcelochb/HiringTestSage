import produce from 'immer';

const INITIAL_STATE = {
  detail: null,
};

export default function pessoa(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pessoa/DETAIL_REQUEST': {
        draft.detail = action.payload;
        break;
      }
      default:
        break;
    }
  });
}
