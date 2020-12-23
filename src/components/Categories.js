import React from 'react';

export default function Categories({ categories, filterItems }) {
    return (
        <div className='container d-flex justify-content-around mt-5 mb-5'>
            {categories.map((c, index) => {
                return (
                    <button className='btn btn-hover' key={index} onClick={() => filterItems(c)}>
                        {c}
                    </button>
                );
            })}
        </div>
    );
}