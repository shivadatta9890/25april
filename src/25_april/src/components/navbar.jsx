import React from "react";
  import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div 
        style={{
            marginTop:"20px",
  display:"flex",
  gap:"50px",
  fontSize:"30px",
  border:"2px solid rgb(253,155,149)",
  overflow:"hidedn",
  padding:"10px",
  backgroundColor: "rgb(253,155,149)",
  justifyContent: "center",
  textDecorationColor:"red",
        }}
        >
             <div>
                <Link to="/home">Home</Link>
                </div>
            <div>
                <Link to="/about">about</Link>
                </div>
            <div>
                <Link to="/books">Books</Link>
                </div>
           <div>
               <Link to="/login">Login</Link>
               </div>
        </div> 
    )
}
export default Navbar;