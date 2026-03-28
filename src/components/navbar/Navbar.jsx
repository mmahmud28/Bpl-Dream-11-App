import React from "react";
import Currency from "../../assets/Currency.png"

const Navbar = () => {

    return (
        <div>
            <div class="navbar bg-base-100 shadow-sm">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div class="flex-none">
                    <button class="btn justify-between items-center gap-3 font-bold">
                        0 Coins
                        <img src={Currency} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Navbar;