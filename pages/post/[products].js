import React from 'react';
import {useRouter} from 'next/router'

const Products = () => {
    const router = useRouter()
    console.log(router.query);
    const {products} = router.query;
    return (
        <div>
            {
                products === 'category' ?
                <div style={{height:" 50px", border:'1px solid green'}}>
                    Category
                </div> :
                <div style={{height:" 50px", border:'1px solid blue'}}>
                Products
            </div>
            }
            
        </div>
    );
};

export default Products;