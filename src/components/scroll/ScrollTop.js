import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
//function taken from "https://www.geeksforgeeks.org/how-to-make-your-page-scroll-to-the-top-when-route-changes/"
export default function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);
 
    return null;
}