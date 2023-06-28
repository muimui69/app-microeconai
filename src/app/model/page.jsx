'use client'
import { useState } from 'react';

import {IoFilterCircleOutline} from 'react-icons/io5';

export default function ModelApp() {

    const [search, setSearch] = useState(false);

    const [userPrompt, setUserPrompt] = useState({
        prompt: ''
    });

    const [data, setData] = useState([]);

    const handleChange = ({ target: { name, value } }) => {
        setUserPrompt({ ...userPrompt, [name]: value });
        setSearch(value !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, userPrompt.prompt]);
        setUserPrompt({ prompt: '' });
    };


    return (
        <>
            <div class="flex-1 px-2 sm:px-0 min-h-screen">
                <div class="flex justify-between items-center py-5">
                    <div class="inline-flex items-center space-x-2">
                        <form onSubmit={handleSubmit} className="flex justify-center items-center">
                            <div className="flex w-[20rem]  md:w-[40rem] lg:w-[50rem] rounded bg-white" x-data="{ search: '' }">
                                <input
                                    type="text"
                                    className="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none" placeholder="Buscar..."
                                    name='prompt'
                                    value={userPrompt.prompt}
                                    onChange={handleChange} />
                                <button
                                    type='submit'
                                    className={`m-1 rounded px-5 py-2 text-c-blanco font-semibold text-gray-100" ${(search) ? 'bg-c-gris-c cursor-pointer text-c-negro' : 'bg-c-gris-o cursor-not-allowed '} disabled=${!search}`}
                                >
                                    Buscar
                                </button>
                            </div>
                        </form >
                        <div class="bg-gray-900 p-2 rounded-md text-white hover:bg-gray-900/80  smooth-hover cursor-pointer" href="#">
                            <IoFilterCircleOutline class="h-8 w-8"/>
                        </div>
                    </div>
                </div>
                {
                    data.length===0 &&
                    <div class="bg-gray-900 border-l-8 hover:bg-gray-900/80  border-c-guindo mb-2">
                        <div class="flex items-center">
                            <div class="p-2">
                                <div class="flex items-center">
                                    {/* <div class="ml-2">
                                        <svg class="h-8 w-8 text-red-900 mr-2 cursor-pointer"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div> */}
                                    <p class="px-6 py-4 text-c-gris-c font-semibold text-lg">Aun no hay elementos ...</p>
                                </div>
                                {/* <div class="px-16 mb-4">
                                    <li class="text-md font-bold text-red-500 text-sm">Name field is required.</li>
                                    <li class="text-md font-bold text-red-500 text-sm">Email field is required.</li>
                                </div> */}
                            </div>
                        </div>
                    </div>
                }
                <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.length !== 0 &&
                        data.map((prompt, index) => (
                            <div key={index} class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="cuisine" />
                                <h4 class="text-white text-2xl font-bold capitalize text-center">{prompt}</h4>
                                <p class="text-white/50">55 members</p>
                                <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">22 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}