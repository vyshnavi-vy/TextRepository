import"./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import CommentsComponent from "./Components/CommentsComponent";
import { useState } from"react";
import ReactPlayer from "react-Player";
function App() {
  const[name,setName]=useState();
  const[comment,setComment]=useState();
  const[comments,setComments]=useState([]);
  const onEntryName=(event)=>{
    setName(event.target.value);
  };
  const onEntryComment=(event)=>{
    setComment(event.target.value);
  };
  const onAddPost=()=>{
    const postObject={
      name:name,
      comment:comment,
    };
    setComments((prevComments)=>[...prevComments,postObject]);
    setName("");
    setComment("");
  };
  return(
    <div className="body-container">
      <HeaderComponent/>
      <div className="main-container">
        <div className="image-container">
          <img
           src="http://www.ipl.com/upload/20250310/045f97a6c7de86f3a5ea981201c38918.webp"
            alt="image-champions"
            className="image-style"
            />
            <ReactPlayer
            url="http://youtube.com/watch?v=pOFSXMFvBpQ+"controls
            width="100%"
            height="100%"
            />
            <div>
             <div ClassName="comment-section">
             </div>
             </div>
          <img/>
        </div>
      </div>
    </div>
  )
}