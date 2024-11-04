let initialState={addCart:[]}
let reducerfun=(state=initialState,action)=>{
     switch(action.type){
        case 'addtoCart':return {...state, addCart:[...state.addCart, action.addCart]}
        case 'removeCart':return {...state,addCart:state.addCart.filter((f,i)=>i!==action.removeCart)}
        default:return state
     }
}
export default reducerfun