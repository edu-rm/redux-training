import produce from 'immer';

export default function user(state = [], action){
  switch (action.type) {
    case 'ADD_USER':
      return [ ...state, action.user];
    case 'DELETE_USER':
      // const newState = state.filter(user => {
      //   return user.name !== action.name
      // });
      // console.log(state);

      // console.log(newState);
      // return [newState];
      return produce(state, draft => {
        const index = draft.findIndex((user) => user.name === action.name);
        if( index >= 0) {
          draft.splice(index, 1)
        }
      });
    default:
      return state;
  }
}
