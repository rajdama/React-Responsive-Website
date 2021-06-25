import React from 'react'
import Card from './Cards'
import Data from './Sdata'

function sevice() {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-3">
                            
                           
                          {Data.map((val,index)=>{
                                return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                          })} 
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sevice
