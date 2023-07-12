import Navigation from "../components/Navigation";


export default function ModelLayout({ children }) {
    return (
        <>
            <div className="bg-gray-800 flex flex-col sm:flex-wrap items-stretch justify-start">
                <div className=" flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-screen sm:p-6 sm:my-2 sm:mx-4">
                    {children}
                </div>
            </div>

        </>
    )
}