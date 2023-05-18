import Instance from "./Axios";
import UserMediaInstance from "./AxiosMedia";

export const RegisterDatacall=async (data)=>
{
 
  return await Instance.post('/userregister',data)
}
export const Validate=async (data)=>
{

  return await Instance.get(`/userregister?user=${data}`)
}
export const LoginUserdata=async (data)=>
{
  

  return await Instance.post('/loginuser',data)
}

export const AddUserdata=async (data)=>
{

  return await UserMediaInstance.patch('/adddetails',data)
}
export const Getuser=async ()=>
{

  return await Instance.get('/getuser')

}
export const DeleteAccount=async()=>
{
  return await Instance.delete('/deleteuser')

}