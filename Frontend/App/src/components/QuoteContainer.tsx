interface QuoteContainerProps{
    author: string,
    quote: string,
}
const QuoteContainer = (props: QuoteContainerProps): JSX.Element => {
    return (
        <div className="w-full p-4 mt-4 bg-slate-800 rounded-2xl text-white font-mono">
            <p className="text-2xl font-bold tracking-widest">{props.author}</p>
            <p className="text-xl">{props.quote}</p>
        </div>
    )
};

export default QuoteContainer;