
import React, { Component } from "react";
import bsCustomFileInput from 'bs-custom-file-input';

class Player_Upload extends Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    bsCustomFileInput.init()
  }

  onFormSubmit(e){
    const formData = new FormData()
    formData.append('myFile', this.state.file)

    fetch('http://localhost/backend1/api/upload', {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.status != 200) {
        alert("Error in uploading file")
      }  else {
        alert("File uploaded successfully")
      }
    }).then(result => {
    });
  }

  onChange(e) {
    e.preventDefault();
    this.setState({file:e.target.files[0]})
  }
  
  render() {
    return (
      <div>
      <div className="awesome" style={{border: '0px solid'}}>
      <h1>Upload Athletes </h1>
      <br />
      <form  onSubmit={this.onFormSubmit} encType="multipart/form-data" acceptCharset="utf-8">
      <div className="custom-file">
      <input type="file" className="custom-file-input" id="validatedCustomFile" accept=".JSON" onChange={this.onChange} required />
      <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
      <div className="invalid-feedback">Example invalid custom file feedback</div>
      </div>
      <br />
      <br />
      <input type="submit" name="Upload" className="button1" value="Upload" />
      </form>
      </div>
      </div>
    );
  }
}

export default Player_Upload;
