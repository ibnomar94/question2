import React, { Component } from "react";




class Main extends Component {

  render() {
      function changeImage(path) {
        document.getElementById("image_block").setAttribute("src", path);
        // e.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
        // e.target.setAttribute('alt', 'dog');
      }
    return (
        <div>
          <h1>Question 2</h1>
          <div className="content">
                <div class="row">
                    <button id="image_1" onClick={() => { changeImage("/1.jpeg") }}> Image 1</button>
                </div>
                <div class="row right">
                    <button id="image_2" onClick={() => { changeImage("/2.jpg") }}> Image 2</button>
                </div>
                <div class="row left">
                     <button id="image_3" onClick={() => { changeImage("/3.png") }}> Image 3</button>
                </div>

                <div class="row">
                     <img class="col-md-6" id="image_block" width="500" height="300"></img>
                </div>
          </div>
        </div>
    );
  }
}

export default Main;
