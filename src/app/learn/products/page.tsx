import Link from "next/link"

const Products = ()=>{
    return (
        <div>
        {
            Array.from({length:10}, ( _, idx)=>(
                <h3 key={idx} >

                <Link href= {`/products/${idx +1}`}> product {idx +1}</Link>
               </h3>
            ))
        }
        </div>
    )
}

export default Products