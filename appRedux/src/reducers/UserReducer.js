export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setAvatar':
      return {...state, avatar: action.payload.avatar};
      break;
    case 'addFavorite':
      return {...state, favorites: [5, 1]};
      break;
    default:
      return state;
  }
};
