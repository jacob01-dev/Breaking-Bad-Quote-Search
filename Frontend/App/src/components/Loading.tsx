const Loading = () : JSX.Element => {
    return (
        <div className="min-h-[calc(100vh-6rem)] flex justify-center items-center">
            <div className="w-24 h-24 border-4 border-b-white rounded-2xl animate-spin"></div>
        </div>
    )
};

export default Loading;