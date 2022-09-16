import React from "react";
import "./Navbar.css";
import {  Link } from "react-router-dom";

const Navbar = () => {
    const menuItems = (
        <>
            <li>
                <Link
                    to="/"
                    className="text-base font-medium hover:bg-red-50 focus:bg-red-50 focus:text-red-600 text-navy-900 hover:text-red-600 " 
                >
                    <i className="fa-solid fa-house-circle-check"></i>
                </Link>
            </li>
            <li>
                <Link
                    to="/menu"
                    className="text-base font-medium hover:bg-red-50 text-navy-900 hover:text-red-600  focus:bg-red-50 focus:text-red-600"
                >
                    Menu
                </Link>
            </li>
            <li>
                <Link
                    to="/about-&-contact"
                    className="text-base font-medium hover:bg-red-50 text-navy-900 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
                >
                    About & Contact
                </Link>
            </li>
            <li>
                <Link
                    to="/book-a-table"
                    className="text-base font-medium hover:bg-red-50 text-navy-900 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
                >
                    Book a Table
                </Link>
            </li>
        </>
    );
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-1">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>

                        <ul
                            tabindex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>

                        <ul
                            tabindex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>

                    <div className="sm-logo">
                        <a className="flex flex-row-reverse items-center justify-center" href="/">
                            <h1 className="sm:w-52 w-10 style-header font-semibold text-4xl text-red-600">
                                COOKING BIRD
                            </h1>
                            <img
                                className="sm:w-20 w-10"
                                src="https://i.ibb.co/9Yg0Pvx/cooking-bird.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>

                <div className="lg:hidden mr-16">
                    <a className="flex flex-row-reverse items-center justify-center" href="/">
                        <h1 className="sm:w-52 w-10 style-header font-semibold text-3xl text-red-600">
                            COOKING BIRD
                        </h1>
                        <img
                            className="sm:w-20 w-10"
                            src="https://i.ibb.co/9Yg0Pvx/cooking-bird.png"
                            alt=""
                        />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">{menuItems}</ul>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label
                            tabindex="0"
                            className="btn btn-ghost font-medium hover:bg-red-100 btn-circle"
                        >
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>

                        <div
                            tabindex="0"
                            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <a
                                        href="/"
                                        className="btn-block ml-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600"
                                    >
                                        View cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label
                            tabindex="0"
                            className="btn btn-ghost btn-circle hover:bg-red-300 avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt="" />
                            </div>
                        </label>

                        <ul
                            tabindex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a
                                    href="/"
                                    className="font-medium hover:bg-red-50 text-navy-900 hover:text-red-600 justify-between"
                                >
                                    Profile<span className="badge">New</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="font-medium hover:bg-red-50 text-navy-900 hover:text-red-600"
                                >
                                    Settings
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="ml-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>

                    <Link to="/sign-in"
                        className="ml-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500"
                    >
                        sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
