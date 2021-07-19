const INTIAL_STATE = {
    isError: false
  };
  
  export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case 'NEWS_ERROR':
        return { ...state, isError: true };
      case 'NOT_NEWS_ERROR':
        return { ...state, isError: false };
      default:
        return state;
    }
  };
  