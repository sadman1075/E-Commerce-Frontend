// import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/features/cart/cartSlice";
import Swal from "sweetalert2";


const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { _id, image, title, description, price, inStock } = product

    const handleAddToCart = () => {
        dispatch(addToCart({ id: _id, name: title, price: price }));
        Swal.fire({
            title: "Good job!",
            text: "You have successfully added this item!",
            icon: "success"
        });
    };


    return (
        <div>
            <div className=''>
                <div>
                    <div className="card card-compact bg-base-100 lg:w-96 lg:h-[440px] shadow-xl">
                        <figure>
                            <img
                                src={image}
                                className="h-60 rounded-xl"
                                alt="" />

                        </figure>
                        <div className="card-body">
                            {/* <h1 className="text-xl font-bold">{autho}</h1> */}

                            <h2 className="text-xl font-bold">{title}</h2>
                            <p className="text-lg font-semibold">price:{price}Tk</p>

                            <p className={`text-lg  font-semibold ${inStock ? "text-green-500" : "text-red-500"}`}><span className="text-black">InStock: </span>{inStock ? "Available" : "Not Available"}</p>

                            <div className="card-actions ">
                                {/* <Link to={`/blog-details/${_id}`} className="btn bg-white hover:bg-orange-500 hover:text-white border-0 text-orange-500">Read More <FaArrowRight className="text-orange-500" />
                                </Link> */}

                                <div className="mt-6 flex w-full items-center gap-2  justify-between">
                                    {
                                        inStock ? <>
                                            <button onClick={handleAddToCart} className="btn w-1/2 bg-orange-500 text-white ">ADD TO CART</button>
                                            <Link to={`/product-details/${_id}`} className=" w-1/2 btn btn-outline btn-secondary ">MORE DETAILS</Link>
                                        </> :
                                            <>
                                                <button disabled className="btn w-1/2 bg-orange-500 text-white ">ADD TO CART</button>
                                                <Link to={`/product-details/${_id}`} className=" w-1/2 btn btn-outline btn-secondary ">MORE DETAILS</Link>
                                            </>
                                    }



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;