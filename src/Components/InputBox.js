import React, {useState} from 'react'

export default function InputBox() {
    const [text, settext] = useState("");
    const handleUpClick = () =>{
        // console.log("toUppercase")
        settext(text.toLocaleUpperCase());
    }
    const handleLoClick = () =>{
        settext(text.toLowerCase());
    }
    const handleClearClick = () =>{
        settext('');
    }
    const handleCopy = () =>{
        let text = document.getElementById('box');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event) => {
        // console.log("Upper Case value");
        settext(event.target.value);
    }
    // settext = () =>{
    //     console.log(text);
    // }
    let preview= {
        border: '2px dashed lightgray'
    }
    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    {/* <label for="/" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>To Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>To Lower Case</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                <div className="mb-3 my-3">
                    {text.split(" ").length} words {text.length} letters
                    <br />
                    {0.008 * text.split(" ").length} minutes of read
                </div>
                <div className="mb-3 my-3" style={preview}>
                    <h3>Preview your text here</h3>
                    {text}
                </div>
            </div>
        </>
    )
}
