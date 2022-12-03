import React from "react";


class Content extends React.Component{
    
        roadmap = [
            {
                title:"HTML & CSS",
               
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus odio ad nam suscipit beatae excepturi possimus ducimus totam veniam molestias dolorem, aliquam nesciunt quibusdam voluptas, eos maiores quas autem!',

            }
        ]
  

    render(){
        return(
            <div>
                {
                    this.roadmap.map((el)=>(
                        <div>
                            <div className="bg-pink-300 mx-8 my-8 py-4 px-4 rounded-md flex">

                            <img src="./img/bat.jpg" width={500} className="rounded-xl" alt="" />
                                <div className="px-3"> 
                                    
                                    <h1 className="text-xl font-bold">{el.title}</h1>
                                    <h3 className="text-md">{el.text}</h3> 
                                </div>
                              
                            </div>
                              
                          </div>
                    ))
                }
            </div>
        )
    }


}

export default Content;