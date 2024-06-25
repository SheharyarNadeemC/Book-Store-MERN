import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className='mt-5 mb-5'>
                <div className="card w-80 sm:justify-center bg-base-100 shadow-xl hover:scale-105 duration-200">
                    <figure><img src={item.image} alt="Image not Found" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.catagory}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer p-3 hover:text-white hover:bg-pink-500">Buy Now!</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
