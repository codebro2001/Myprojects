import React from "react";




export default function Header(){
   var navel = {
        login:"login",
        sign:"sign",
    }
    
    
    
    return(
        <div className="flex justify-between bg-gray-300">
            <div>
                <h1>Bankai</h1>
            </div>
    
            <div>
                <button className="bg-green-300 ">{navel.login}</button>
                <button className="bg-red-300">{navel.sign}</button>
            </div>
        </div>
    )
}

