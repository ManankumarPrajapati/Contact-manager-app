import React from "react";
import user1 from "../image/user1.png";

const ContactCard = (props)=>{
     const { id ,name , email} = props.contact;
     return(
          <div className='item'>
                         <img className="ui avatar image" src={user1}  alt="user" />
                    <div className='content'>
                         <div className='header'>{name}</div>
                         <div>{email}</div>
                    <i className="trash alternate outline icon"
                    style={{color:"red",fontSize:"2em",margin:"0px",padding:" 0px 240px"}}
                    onClick={()=> props.clickHandler(id)}
                    ></i>
                    </div>    
                    </div>
              
     );
};

export default ContactCard;