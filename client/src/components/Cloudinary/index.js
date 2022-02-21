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

// class Cloudinary extends Component {
//   componentDidMount() {
//     var myWidget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: "doetzelhn",
//         uploadPreset: "bgdwrnsi"
//       },
//       (error, result) => {
//         if (!error && result && result.event === "success") {
//           console.log("Done! Here is the image info: ", result.info);
//         }
//       }
//     );
//     document.getElementById("upload_widget").addEventListener(
//       "click",
//       function () {
//         myWidget.open();
//       },
//       false
//     );
//   }

//   render() {
//     return (
//       <button id="upload_widget" className="cloudinary-button">
//         Upload
//       </button>
//     );
//   }
// }

export default Cloudinary;
