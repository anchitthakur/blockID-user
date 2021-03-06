import React from 'react'
import Userlayout from "../../layouts/Userlayout";
import { useRouter } from 'next/router';

export default function upload() {

    const router = useRouter()

    const onSubmit = async () => {
   
            router.push('/otp');
            
    }

    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        <div className="flex-auto px-10 lg:px-10 py-10 mx-auto">
                            <form>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="fileUpload"
                                    >
                                        Upload Documents
                                     </label>
                                    <input
                                        type="file"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        id="fileUpload"
                                    />
                                </div>
                            </form>
                            <hr className="my-4 md:min-w-full bg-black" />
                            <hr className="my-4 md:min-w-full bg-black" />
                            <form>
                                <div className="relative w-full mb-3 p-2">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="fileUpload"
                                    >
                                        Enter Aadhar Number
                                     </label>
                                    <input
                                        type="text"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        id="fileUpload"
                                    />
                                </div>
                                <div className="text-center mt-6">
                                    <button
                                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={onSubmit}
                                    >
                                        Next
                                        </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


upload.layout = Userlayout;