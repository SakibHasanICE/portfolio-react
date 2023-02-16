import React from 'react';
import "./TechStack.css"
const TechStack = () => {
    const data=[
        {
            name:"Full Stack Developer"
        },
        {
            name:"Node js"
        },
        {
            name:"React js"
        },
        {
            name:"Vue js"
        },
        {
            name:"Express js"
        },
        {
            name:"MongoDb"
        },
        {
            name:"Firebase"
        },
        {
            name:"Github"
        },
        {
            name:"Api"
        },
        {
            name:""
        },
        {
            name:"Full Stack Developer"
        },
        {
            name:"Full Stack Developer"
        },
        {
            name:"Full Stack Developer"
        },
        {
            name:"Full Stack Developer"
        },
        {
            name:"Full Stack Developer"
        },
    ];
    const colors=[
        "#FF5733",
        '#972A13',
        "#FF5733",
        '#972A13',
        "#FF5733",
        '#972A13',
        "#FF5733",
        '#972A13',
        "#FF5733",
        '#972A13',
        "#FF5733",
        '#972A13',
        "#FF5733",
        '#972A13', 
    ]

    return (
      <div className='container techstack-section'>
         <div className='section-title'>
           <h5>Tech Stack </h5>
           <span className='line'></span>
         </div>
         <div className='row'>
            {
                data.map((item,index)=>(
                   <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                      <div className='tech-content'>
                           <span>
                            {index+1}
                           </span>
                           <p>{item.name}</p>
                      </div>
                   </div> 
                ))
            }
         </div>
      </div>
    );
};

export default TechStack;