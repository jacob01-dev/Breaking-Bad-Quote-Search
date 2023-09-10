import { useState} from "react";
import useFetch from "../hooks/UseFetch";
import QuoteContainer from "./QuoteContainer";
import Error from "./Error";
import Loading from "./Loading";

interface Quote {
    quote: string,
    author: string
}

interface QuoteListProp{
    inputValue: string
};

const QuoteList = (prop: QuoteListProp): JSX.Element => {
    const [quoteList, setQuoteList] = useState<Quote[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [handleError, setHandleError] = useState<boolean>(false);
    useFetch(prop.inputValue, setQuoteList, setIsLoading, setHandleError);


    if(handleError) { 
        return (
            <Error/>
        )
    }

    if(isLoading){
        return (
            <Loading/>
        )
    }
    
    return (
        <div className="min-h-[calc(100vh-6rem)] p-4">
            {
                quoteList.length && quoteList.map( (quote,index) => (
                    <QuoteContainer key={index} author={quote.author} quote={quote.quote} />
                ))
            }
        </div>
    )
};

export default QuoteList; 