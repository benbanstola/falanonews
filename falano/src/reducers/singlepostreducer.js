export default(state={},action)=>{
    switch (action.type) {
        case 'FETCH_SINGLEPOST':
            return {...state,data:action.payload}
    
        default:
            return state
    }
}