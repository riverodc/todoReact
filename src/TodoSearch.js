import React from "react";
import './todoSearch.css'; 

function TodoSearch() {

    return (

       // <input placeholder="Peras" />
       <section className="py-5 text-center container">
       <div className="row py-lg-5">
         <div className="col-lg-6 col-md-8 mx-auto">
           <h1 className="fw-dark" >New Task Creator</h1>
           <p className="lead">In this area you can create a new task.<br/> 
            <strong>Type your new task and press enter.</strong></p>
        
          <div className="mx-auto">
          
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">New Fire Task</label>
          </div>

           <div className="d-inline p-2">
            <a href="#!" className="btn btn-primary my-2">Add New Task</a>
           </div>
           <div className="d-inline p-2">
             <a href="#!" className="btn btn-secondary my-2">Clear Task</a>
           </div>

           </div>

         </div>
        </div>
      </section>

    );
} 

export { TodoSearch }; 
