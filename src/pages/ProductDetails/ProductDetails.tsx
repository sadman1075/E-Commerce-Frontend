import { useDispatch } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { addToCart } from "../../Redux/features/cart/cartSlice";
import Swal from "sweetalert2";

const ProductDetails = () => {

    const { _id, image, title, description, price, inStock } = useLoaderData()
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({ id: _id, name: title, price: price }));
        Swal.fire({
            title: "Good job!",
            text: "You have successfully added this item!",
            icon: "success"
        });
    };

    return (
        <div className=" max-w-7xl mx-auto">
            <div className='lg:flex justify-center items-center gap-20  mb-10 '>
                <div className='w-full lg:w-1/2'>
                    <img src={image} className="rounded-2xl w-full" alt="" />


                </div>
                <div className='w-full lg:w-1/2 mt-5'>
                    <h1 className='text-3xl lg:text-5xl p-2  font-bold'>{title}</h1>

                    <p className='mt-5 text-justify p-2'>{description}</p>
                    <p className=' text-justify text-lg px-2'><b>Price:</b> {price}</p>
                    <p className={`text-justify px-2  text-lg font-semibold ${inStock ? "text-green-500" : "text-red-500"}`}><span className="text-black">InStock: </span>{inStock ? "Available" : "Not Available"}</p>


                    <div className=' flex items-center gap-3'>


                    </div>
                    <div className='mt-5 flex gap-4 justify-center'>
                        {
                            inStock ? <>
                                <button onClick={handleAddToCart} className="btn w-1/3 bg-orange-500 text-white p-2 mt-6">ADD TO CART</button>
                                <Link to={-1} className='btn w-1/3 bg-black p-2 hover:bg-black text-white mt-6'>

                                    back</Link>
                            </> :
                                <>
                                    <button disabled className="btn  w-1/3 bg-orange-500 text-white p-2 mt-6">ADD TO CART</button>
                                    <Link to={-1} className='btn  w-1/3 bg-black p-2 hover:bg-black text-white mt-6'>

                                        back</Link>
                                </>
                        }

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductDetails;