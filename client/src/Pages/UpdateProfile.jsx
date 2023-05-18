import React, { useEffect, useState } from 'react'
import ItemsDelete from '../components/confirmation';
import { useNavigate } from 'react-router-dom';
import { AddUserdata, DeleteAccount, Getuser } from '../API/ApiCall';

function UpdateProfile({model}) {
const [deleteaccount, setDeleteaccount] = useState(false)
const [selectedImage, setSelectedImage] = useState(null);
const [Username, setUsername] = useState('')
const [address, setAddress] = useState('')
const [Userdatas, setUserdatas] = useState('')
const [preview, setpreview] = useState()
const [updateImage, setupdateImage] = useState()
const [err, setErr] = useState('')
const navigate=useNavigate()
    const handleImageUpload = (event) => {
      setpreview('')
      const file = event.target.files[0];
      setupdateImage(event.target.files[0])
      console.log(file);
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);



      }
    };
   const GetUserdata=()=>
    {
      Getuser().then(data=>
        {
          setUserdatas(data.data)
          setUsername(data.data.name)
          setAddress(data.data.Address)
          setpreview(data.data.dp)
       
        })
    }


const deleteaAC=()=>
{
  DeleteAccount().then(data=>{
    localStorage.removeItem('Userdata')
    setDeleteaccount(false)
    navigate('/',{state:{reg:'successfully Deleted Account'}})

  })
}
useEffect(()=>
{
  GetUserdata()
},[])

const updateUser=()=>
{

if(Username&&address)
{
  let formData = new FormData();
  

    formData.append("file",updateImage);
    formData.append('email',Username)
    formData.append('Address',address)
  formData.append('dp',preview)
    AddUserdata(formData).then(data=>
      {
        
        model(false)
      })
}
 else{
setErr('fill the form')
 }



}


  return (
    <div className="modal fixed z-10 inset-0 overflow-y-auto">
    <div className="modal-content flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
      
      <div class="h-auto py-5 px-3 bg-gray-700 rounded-lg items-center">
    <div class="dark rounded-lg"> 
    <div className='flex justify-evenly '>
  <div className='w-1/12'></div>
    <h4 class=" p-3 text-[22px]">Edit Social Profiles</h4>

    <button
              onClick={()=>{
                model(false)
              }}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.06 4.94a.75.75 0 0 0-1.06 0L12 10.94l-6.06-6.06a.75.75 0 0 0-1.06 1.06L10.94 12l-6.06 6.06a.75.75 0 0 0 1.06 1.06L12 13.06l6.06 6.06a.75.75 0 0 0 1.06-1.06L13.06 12l6.06-6.06a.75.75 0 0 0 0-1.12z" />
              </svg>
            </button>
    </div>
    <p className='font-bold text-red-400 flex justify-center'>{err}</p>
     <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
      
         <div class="col-span-6 relative">

             <span class=" bg-gray-900 left-3 -top-[12px] px-2">Name</span>
             <input required  type="text" value={Username} onChange={(e)=>
            {
              setErr('')

              setUsername(e.target.value)
            }} class="text-[13px] h-12 text-white w-full border-2 px-2 rounded-lg bg-black" />
         </div>
     
         <div class="col-span-6 relative">
             <span class=" bg-gray-900 left-3 -top-[12px] px-2">Address</span>
             <input required type="text" value={address} onChange={(e)=>
            {
              setErr('')
              setAddress(e.target.value)
            }} class="text-[13px] h-12 text-white w-full border-2 px-2 rounded-lg bg-black  " />
         </div>
     
      
     
         <div>
      {/* <input className='text-white' type="file" accept="image/*" onChange={handleImageUpload} /> */}

      {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="default_size">Default size</label> */}
<input name='file' type="file" accept="image/*" onChange={handleImageUpload} class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"/>

      {selectedImage && (
        <img
          src={selectedImage}
          alt="Uploaded"
          className="mt-4 max-w-xs max-h-xs h-24 "
        />
      )}
          {preview && (
        <img
          src={`http://localhost:8000/static/images/${preview}`}
          alt="Uploaded"
          className="mt-4 max-w-xs max-h-xs h-24 "
        />
      )}
    </div>
   
     
     
     
     </div>
     
     <div class="px-4 text-right py-2 flex justify-between">
     <button onClick={()=>
    {
        setDeleteaccount(true)
    }} class="  h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-orange-700 bg-red-600">delete account</button>

         <button onClick={updateUser} class="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
     </div>
   </div>
 </div>
 {deleteaccount&&<ItemsDelete model={setDeleteaccount} callback={deleteaAC}/>}
      </div>
    </div>
  </div>  
   
  )
}

export default UpdateProfile