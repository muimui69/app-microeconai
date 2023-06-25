'use client'
import { useState } from 'react';

export default function ModelApp() {

    const [search, setSearch] = useState(false);

    const [userPrompt, setUserPrompt] = useState({
        prompt: ''
    });

    const [data, setData] = useState([]);

    const handleChange = ({ target: { name, value } }) => {
        setUserPrompt({ ...userPrompt, [name]: value });
        console.log({ [name]: value });
        setSearch(value !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, userPrompt.prompt]);
        setUserPrompt({ prompt: '' });
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-center mt-10">
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
            <div className='px-10 py-10'>
                {data.length === 0 ? (
                    <h1>No hay elementos...</h1>
                ) : (
                    data.map((prompt, index) => <p key={index} className="p-5">{prompt}</p>)
                )}
            </div>
        </>
    )
}