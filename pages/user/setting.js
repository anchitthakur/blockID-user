import React from 'react'
import Userlayout from "../../layouts/Userlayout";
import { useRouter } from 'next/router';

export default function setting() {
    const router = useRouter();

    const submit = ()=>{
        router.push("/user/userNext")
    }
    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-8/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        {/* <div className="flex-auto px-10 lg:px-10 py-10 mx-auto"> */}
                            <form>
                                <div class="shadow overflow-hidden sm:rounded-md">
                                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <fieldset>
                                            <legend class="text-base font-medium text-gray-900">By Email</legend>
                                            <div class="mt-4 space-y-4">
                                                <div class="flex items-start">
                                                    <div class="flex items-center h-5">
                                                        <input id="comments" name="comments" type="checkbox" checked class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                    </div>
                                                    <div class="ml-3 text-sm">
                                                        <label for="comments" class="font-medium text-gray-700">Age</label>
                                                        {/* <p class="text-gray-500">Get notified when someones posts a comm.</p> */}
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <div class="flex items-center h-5">
                                                        <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-7 w-7 text-indigo-600 border-gray-300 rounded" />
                                                    </div>
                                                    <div class="ml-3 text-sm ">
                                                        <label for="candidates" class="font-medium text-gray-700">Address</label>
                                                        {/* <p class="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <div class="flex items-center h-5">
                                                        <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                    </div>
                                                    <div class="ml-3 text-sm">
                                                        <label for="offers" class="font-medium text-gray-700">Gender</label>
                                                        {/* <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button type="button" onClick={submit} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
            </button>
                                    </div>
                                </div>
                            </form>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


setting.layout = Userlayout;