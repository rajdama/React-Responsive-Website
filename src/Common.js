import React from 'react'
import { NavLink } from "react-router-dom";
function Common(props) {
    return (
        <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>
                            {props.desc}
                            
                        </h1>
                        <h1><strong  className='brand-name'>Web Quest</strong></h1>
                        <h2 className='my-3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aliquam.
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.page}>
                            <a href="" className='btn-get-started'>{props.btname}</a>
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src={props.img}  className='img-fluid animated' alt="home img" />
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Common
