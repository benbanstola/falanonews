export default(state={},action)=>{
    switch (action.type) {
        case 'CREATE_POST':
            return {...state,data:action.payload}
    
        default:
            return state
    }
}