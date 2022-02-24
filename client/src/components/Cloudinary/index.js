import React, { Component, useEffect } from "react";

function Cloudinary(props) {
    useEffect( () => {
        if(window.cloudinary){
            var myWidget = window.cloudinary.createUploadWidget({
                cloudName: "'"+process.env.REACT_APP_CLOUDINARY_CLOUD_NAME+"'", 
                uploadPreset: "'"+process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET+"'",
                sources: [ 'local', 'image_search', 'instagram', 'facebook', 'url', 'camera'],
                googleApiKey: "'"+process.env.REACT_APP_CLOUDINARY_GOOGLE_API_KEY+"'" }, 
                (error, result) => { 
                    if (!error && result && result.event === "success") { 
                        console.log('Cheetah! Here is the image info: ', result.info); 
                        props.SetLogo(result.info.secure_url);
                    }
                }
            )
            
            document.getElementById("upload_widget").addEventListener("click", function(){
                myWidget.open();
                }, false);
        }
    }
    ,[])
    return(
        <button id="upload_widget">Upload Logo</button>
    )
}



export default Cloudinary;
