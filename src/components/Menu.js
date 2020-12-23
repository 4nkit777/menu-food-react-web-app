import React from 'react';

export default function Menu({ items }) {
    return (
        <div className='container '>
            <div className='row d-flex justify-content-between'>
                {items.map((menuItem) => {
                    const { id, title, img, price,  desc } = menuItem;
                    return (
                        <article key={id} className='card shadow d-flex flex-row mb-3 card-hover' style={{ width: '34rem' }}>
                            <div className='d-flex card-body'>
                                <img src={img} alt='' style={{ width: '12rem', height: '10rem'}} className='align-self-center border rounded border-danger' />
                            </div>
                            <div className='card-body'>
                                <header className='d-flex justify-content-between border-bottom mb-2' >
                                    <h4>{title}</h4>
                                    <h6 className='text-primary'>${price}</h6>
                                </header>
                                <p>{desc}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
            
        </div>
    );
}