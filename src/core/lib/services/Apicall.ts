import axios from "axios";
import { url } from "../utils";

async function getnews(){
const data=axios.get(url.allnews)
return data
}


export default getnews