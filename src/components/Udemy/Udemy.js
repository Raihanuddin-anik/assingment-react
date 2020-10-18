import React, { useState } from 'react';
import { useEffect } from 'react';
import datas from '../../data/data.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import '../Course/Course.css'


const Udemy = () => {
    const firstFifteen =datas.slice(1,16);
    const [clubs, setClubs] = useState(firstFifteen);
    

    const [cart, setcart]= useState([]);
    const handleInrease = (product)=>{
       console.log(product)
        const newcart = [...cart, product]
        setcart(newcart);
    }
    return (
        <div className="course-style">
            <div>
                {
                    clubs.map(data => <Course 
                        course={data}
                    addcart={handleInrease}
                    // addproduct ={product}
                    ></Course>)
                }
            </div>

            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Udemy;