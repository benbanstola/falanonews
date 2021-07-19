const INTIAL_STATE = {
    toShow: true
  };
  
  export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case 'SHOW_AD':
        return { ...state, toShow: true };
      case 'HIDE_AD':
        return { ...state, toShow: false };
      default:
        return state;
    }
  };
  