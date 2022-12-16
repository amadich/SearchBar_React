import React, { Component } from "react";
//import Api from '../db/api.json';
import '../styles/section.css';
import Datai from '../db/datai.js';
import Todos from '../components/Todos';
export default class section extends Component {



   render() {
	   const animes =  Datai().info;


      return(
         <section>
               <div className="divinput_api">
                  <input type="text" placeholder="Search API" className="form-control" id="exampleFormControlInput1" />

                  <div id="container_api">

						{
							animes.map((res) =>
								<Todos id={res.id} name={res.name} img = {res.img} />
							)

						}




            {
              setTimeout(()=> (
                document.getElementById("container_api").style.display = "none"
            ) , 100)
            }




              `${
                  setTimeout(() => {
                     document.getElementById("exampleFormControlInput1").addEventListener('input', () => {
                       if(document.getElementById("exampleFormControlInput1").value == "") {
                           document.getElementById("container_api").style.display = "none";
                         }

                         else {
                           document.getElementById("container_api").style.display = "block";
                          const xi = document.getElementById("exampleFormControlInput1").value;

                           for(var i = 0 ; i < document.getElementById("exampleFormControlInput1").value.length ; i++)
                           {

                             if(animes[0].name.toLowerCase() == xi.toLowerCase()) {
                               //console.log(animes[0].name);
                             }
                           }


                         }
                     })
                  },100)
              }`









                  </div>
               </div>
         </section>
      )
   }
}
