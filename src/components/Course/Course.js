import React from 'react';

import './Course.css'

const Course = (props) => {
//  console.log(props)
    const { img, course_name, price } = props.course;
    return (
        <div className="style">
           
                <h3> Course Name: {course_name}</h3>
                <img src={img} alt="" />
                <p> price:{price}</p>
                <button onClick={()=>props.addcart(props.course)} >Enroll Now</button>
                <p>About The Course:<br></br><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Asperiores sequi voluptas nesciunt explicabo placeat! Ipsam nihil animi porro dignissimos illum?</small></p>
           
           


        </div>
    );
};

export default Course;