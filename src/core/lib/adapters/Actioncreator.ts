import { Actions } from "../usecases/Actions";

export const getnews1=(data:any)=>{
return{
type:Actions.getnews,
payload:data
}
}