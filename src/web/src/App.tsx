import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getnews1 } from 'core/dist/adapters/Actioncreator'
import getnews from "core/dist/services/Apicall"

function App() {
const dispatch=useDispatch()
  const data=useSelector((state:any)=>state.reducer1)

const [first, setfirst] = useState([])
useEffect(() => {
 const d= getnews()
 d.then(function(data:any){
dispatch(getnews1(data.data.articles))
 })
}, [data])
const hold1=data&&data.loading==false&&data.payload.filter((elem:any)=>{
if(elem.author!==null&&elem.title!==null&&elem.description!==null&&elem.urlToImage!==null){
return elem
}
})
const hold2=hold1&&hold1!==false&&hold1.map((elem:any,id:number)=>{
return <div key={id}>
  <h2>{elem.author}</h2>
  <h2>{elem.title}</h2>
  <h2>{elem.description}</h2>
  <h2>{elem.urlToImage}</h2>
</div>
})

  return (
    <div>
      {data.loading===false?hold2:<h3>Loading</h3>}
      </div>
  )
}

export default App