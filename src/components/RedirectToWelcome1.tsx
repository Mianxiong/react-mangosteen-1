import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router";

export const RedirectToWelcome1: React.FC = () => {
    // const error: any = useRouteError();
    // console.error(error);

    // return (
    //     <div id="error-page">
    //         <h1>Oops!</h1>
    //         <p>Sorry, an unexpected error has occurred.</p>
    //         <p>
    //             <i>{error.statusText || error.message}</i>
    //         </p>
    //     </div>
    // );
    const nav = useNavigate()
    useEffect(()=>{
        nav('/welcome/1')
    },[])
    return null
}