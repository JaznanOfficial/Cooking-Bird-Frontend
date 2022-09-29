import React, { useState } from "react";
import { Label, Modal, TextInput } from "flowbite-react";

const AddressModal = () => {
    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };
    return (
        <div className="text-start">
            <React.Fragment>
                <button
                    class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-400 mt-8 mx-4"
                    onClick={openModal}
                >
                    <i class="fa-solid fa-plus"></i> Add an address
                </button>

                <Modal show={show} size="md" popup={true} onClose={closeModal}>
                    <Modal.Header />
                    <Modal.Body>
                        <h1 className="text-rose-600 text-start text-xl">
                            Enter your address correctly
                        </h1>
                        <div className="mt-5">
                            <form>
                                <div class="relative z-0 mb-6 w-full group">
                                    <label
                                        for="countries"
                                        class="block mb-2 text-sm font-medium text-gray-400 "
                                    >
                                        Address Type
                                    </label>
                                    <select
                                        id="countries"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    >
                                        <option>Home</option>
                                        <option>Office</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <label
                                        for="message"
                                        class="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-400"
                                    >
                                        Your details area address
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    ></textarea>
                                </div>

                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input
                                            type="tel"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            name="floating_phone"
                                            id="floating_phone"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-400 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            for="floating_phone"
                                            class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Phone number
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center">
                                    <button
                                        type="submit"
                                        class="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 text-end"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </div>
    );
};

export default AddressModal;
