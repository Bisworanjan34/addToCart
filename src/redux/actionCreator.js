let action1=(data)=>{
    return{
        type:'addtoCart',addCart:data
    }
}

let action2=(index)=>{
    return {
        type:'removeCart',removeCart:index
    }
}
export {action1,action2}