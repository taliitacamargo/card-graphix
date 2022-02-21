import React, { Component, useEffect } from "react";

function Cloudinary(props) {
    useEffect( () => {
        if(window.cloudinary){
            var myWidget = window.cloudinary.createUploadWidget({
                cloudName: 'doetzelhn', 
                uploadPreset: 'bgdwrnsi',
                sources: [ 'local', 'image_search', 'instagram', 'facebook', 'url', 'camera'],
                googleApiKey: 'AIzaSyCZqq4TeSsr3D4FuyKeLxgcV-cmgKwA-no' }, 
                (error, result) => { 
                    if (!error && result && result.event === "success") { 
                        console.log('Cheetah! Here is the image info: ', result.info); 
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
