import React, { useState } from 'react'
import ErrorNotification from './ErrorNotification';
import SuccessNotification from './SuccessNotification';


const ImageUpload = () => {

  const [file,setFile] = useState(null)
  const [uploadError,setUploadError] = useState('');
  const [successMsg,setSuccessMsg] = useState('');

  const handleUpload = (e)=> {

    e.preventDefault();

    setFile(null)

    if(!file) {
      setUploadError('please select image file to upload !')
      return 
       ;
    }

    let fileSizeInByte = Math.round(file.size/1024)
    let checkFileExtension = file.name.split('.')
    

    if(fileSizeInByte > 2048) {
      setUploadError('file size should be less than 2mb !')
      return 
      
    }
    else if(checkFileExtension[1] !== 'png' && checkFileExtension[1] !== 'jpg' ){
      setUploadError(`file type should be png , jpg format to upload `)
      return 
        
    }
    else {
      setSuccessMsg(`image uploded successfully`)
      console.log(`image uploded successfully`);
    }
  }

  return (
    <>
    <div className=' font-primary text-sm'>
    <h4>Upload Your Image Here</h4>
    
      <form onSubmit={handleUpload}>

        <input type="file" className=' text-xs my-3' onChange={val => setFile(val.target.files[0])} />

        <button 
        type='submit'
        className=' bg-green-400 p-2 rounded-md text-green-800 hover:text-white hover:bg-green-600'
        >Upload</button>
      </form>


      <div className=' p-4 m-2 w-fit border'>
      <h4 className=' font-bold'>Note : </h4>
      <h4>➡️:-file size should be less than 2MB</h4>
      <h4>➡️:-file type should be jpeg , png</h4>
      </div>
    
    </div>

    {
      uploadError !== '' && <ErrorNotification data={uploadError}/> 
    }

    {
      successMsg !== '' && <SuccessNotification data={successMsg}/>
    }
    
    </>
  )
}

export default ImageUpload