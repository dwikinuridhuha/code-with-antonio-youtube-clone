const Page = ({params}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Video</h1>
            <p className="mt-4 text-lg">This is the video page {params?.videoid}.</p>
        </div>
    )
}

export default Page;