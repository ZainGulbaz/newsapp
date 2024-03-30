
export default function NewsCard({ source, title, image, description,url }) {
    return (<div className="flex flex-col justify-between px-2 py-4 bg-gray-700 rounded-xl shadow-2xl">
        <div className="flex justify-between">
            <div className="">
                <div>
                <h4 className="font-sm text-primary text-xs">{source}</h4>
                </div>
                <h4 className="font-lg font-bold text-primary">{title}</h4>
                <p className="text-primary overflow-clip text-xs max-w-md">{description?.slice(0,100)}....</p>
            </div>
            <img src={image} height={100} width={100} className="rounded-lg" alt="news image"/>
            <hr className="text-primary mt-4 "/>
        </div>
        
        
        <a type="button" className="text-gray-900 text-primary border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-primary  dark:focus:ring-gray-800 mt-10" href={url}>Open</a>

        
    </div>)
}