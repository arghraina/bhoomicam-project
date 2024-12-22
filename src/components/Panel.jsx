import "bootstrap/dist/css/bootstrap.min.css"
import style from "./Panel.module.css"
import { useState } from "react"
import ShowImage from "./ShowImage";
const Panel = () => {

    const [inpImage, setInpImage] = useState([]);
    const [submittedImages, setSubmittedImages] = useState([]);

    const handleOnChange = (event) => {
        setInpImage(Array.from(event.target.files));      
    };


    const handleOnSubmit = (event) => {
        event.preventDefault();
        setSubmittedImages(inpImage);
        setInpImage([]);
        event.target.reset();
    }

    return (
        <div className={`${style.container}`}>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="https://www.bhoomicam.com/" target="0" className="nav-link active" aria-current="page"><img src="https://www.bhoomicam.com/images/icons/webLogo.svg" className={`${style.logo}`}></img>&nbsp;&nbsp;BHOOMICAM</a></li>
                </ul>
            </header>
            <form onSubmit={handleOnSubmit} className={`${style.container2}`}>
                <center className={`${style.add_image}`}>Add &nbsp; Image
                </center>
                <center>
                    <input 
                    type="file" 
                    className={`${style.inp}`}
                    onChange={handleOnChange}></input>
                    <button type="submit" className={`${style.butn} btn btn-primary`}>Submit</button>
                </center>
            </form>

            <center><ShowImage setInpImage={setInpImage} setSubmittedImages={setSubmittedImages} images={submittedImages}/></center>
        </div>
    )
}

export default Panel;