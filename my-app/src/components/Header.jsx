import React  from "react";


class Header extends React.Component{
  

    navel = [
        {
            logo : "FrontEnd",
            login : "Login", 
            sign : "Sign"
        }
    ]



    render(){
        return(
            <div>
                {
                    this.navel.map(el=>(
                        <div className="bg-gray-400 flex justify-between  ">
                            <div>  
                                <h1 className="px-3 py-3 font-bold text-xl text-white" > {el.logo}</h1>
                                
                                </div>
                             
                             
                             <div>
                                 <ul className=" flex justify-end">
                            
                                <li className="px-2 py-2 mx-2 my-2  rounded-lg hover:bg-blue-300  cursor-pointer  border-2 border-sky-300 bg-white">{el.login}</li>
                                <li className="px-2 py-2 mx-2  my-2 rounded-lg hover:bg-red-300 cursor-pointer border-2 border-red-300 bg-white">{el.sign}</li>
                               
                            </ul>
                        </div>
                            
                        </div>
                    ))
                }

            </div>
        )
    }


}

export default Header;