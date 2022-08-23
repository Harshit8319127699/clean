import { Actions } from "../usecases/Actions";
import { Getnews } from "../usecases/Actiontype";

const initstate:any=[]

export const reducer1=(state:any=initstate,action:Getnews)=>{
switch (action.type) {
    case Actions.getnews:
        return{
            ...state,payload:action.payload,loading:false
        }
        

    default:
        return{
            state,
            loading:true
        };
}
}
