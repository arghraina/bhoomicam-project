import { useEffect, useState } from "react";
import style from "./ShowImage.module.css"
import { MdOutlineZoomIn , MdOutlineZoomOut } from "react-icons/md";

const ShowImage = ({setInpImage, setSubmittedImages , images}) => {

    const [size, setSize] = useState(200);
    
    const onZoomIn = ()=>{
        setSize(size+50);
    }

    const onZoomOut = ()=>{
        setSize(size-50);
    }

    const deleteImage= ()=>{
        setInpImage([]);
        setSubmittedImages([]);
    }

    const downloadImage = (image) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(image); // Create a temporary URL
        link.download = "image.jpg"; // Specify the filename
        document.body.appendChild(link); // Append link to the body
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove link from the body
        URL.revokeObjectURL(link.href); // Release memory
      };

    return (
        <div>
            {images.length === 0 ? (
                <p>No images uploaded yet.</p>
            ) : (
                images.map((image, index) => (<>
                    <img
                        className={`${style.image}`}
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Uploaded ${index}`}
                        style={{height: `${size}px`, width: `${size}px`}}
                    />
                    <button onClick={onZoomIn} className={`${style.zoom}`}><MdOutlineZoomIn size={30}/>
                    </button>

                    <button onClick={onZoomOut} className={`${style.zoom}`}><MdOutlineZoomOut size={30}/>
                    </button>
                    <button onClick={deleteImage} style={{marginBottom: "4px", marginTop:"4px", boxShadow:"2px 2px 1px black"}} type="button" className="btn btn-danger">delete</button>
                    <br/>
                    <button
                onClick={() => downloadImage(image)}
                style={{
                  marginTop: "4px",
                  marginBottom: "10px",
                  boxShadow: "2px 2px 1px black",
                }}
                type="button"
                className="btn btn-success"
              >
                Download
              </button>
                    </>
                    
                ))
            )}
            
        </div>
    )
}

export default ShowImage;