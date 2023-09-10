import { useEffect } from "react"

interface Quote {
    quote: string,
    author: string
}


const useFetch = (author: string, setQuoteList: Function, setIsLoading: Function, setHandleError: Function): void => {

    const encodeAuthor = (authorString: string): string => {
        return authorString.replace(" ", "+");
    };

    const fetchData = async () => {
        try {
            setIsLoading(true);
            let response;

            if(author.length > 0){
                response = await fetch(`http://127.0.0.1:8000/quotes/${encodeAuthor(author)}`);
            } else {
                response = await fetch(`http://127.0.0.1:8000/quotes`);
            }
        
            if(response.ok){
                const data = await response.json();
                setQuoteList(data.data);
                setIsLoading(false);
                setHandleError(false);
            } else if(!response.ok){
                setHandleError(true);
            }
        } catch  {
            setHandleError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, [author]);
};

export default useFetch;