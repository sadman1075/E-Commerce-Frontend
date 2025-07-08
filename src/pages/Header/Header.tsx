import type { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;

        console.log({
            name, email, address
        });
        form.reset()
        alert("you have successfully confirm the order")
    }

    return (
        <div className="navbar bg-base-100 shadow-sm mb-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={"/products"}>All Product</Link></li>




                    </ul>
                </div>
                <a className=" font-bold text-xl">Eco<span className="text-orange-500">Mart</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/products"}>All Product</Link></li>


                </ul>
            </div>
            <div className="navbar-end">
                <li>
                    <label htmlFor="my-drawer" className="btn bg-amber-600 text-white drawer-button">Cart</label>
                </li>
            </div>
            <div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="mb-2">
                                    <div className="flex justify-between">
                                        <span>{item.name} x {item.quantity}</span>
                                        <span>TK {item.price * item.quantity}</span>
                                    </div>
                                </div>
                            ))}

                            <hr className="my-4" />
                            <div className="text-right font-bold">Total: {total} Tk</div>

                            <button className="btn mt-10 bg-orange-500 text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>CheckOut</button>

                        </ul>
                        {/* Modal for payment  */}
                        <div>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Checkout!</h3>
                                    <div>
                                        <form className="" onSubmit={handleCheckout} >
                                            <div className="flex flex-col gap-6 mt-5">
                                                <div className="flex flex-col items-center text-center  md:ml-20">
                                                    <fieldset className="fieldset w-full ">
                                                        <label className="label">Name</label>
                                                        <input type="text" name="name" className="input" placeholder="Name" />
                                                        <label className="label">Email</label>
                                                        <input type="email w-full" name="email" className="input" placeholder="Email" />
                                                        <label className="label">Address</label>
                                                        <input type="text" name="address" className="input" placeholder="Address" />
                                                        <button className="btn btn-neutral w-[320px]  mt-4">CheckOut</button>


                                                        <div className="">
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;