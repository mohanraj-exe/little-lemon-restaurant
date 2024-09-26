import {
    useState,
    // useEffect 
} from "react";
import { useNavigate } from "react-router-dom";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const useSubmit = () => {

    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("Triggered:", isLoading);
    // }, [isLoading]);

    const submitAPI = async (formData, delay = 2000) => {
        setLoading(true);
        try {
            await wait(delay);
            if (!formData) {
                throw new Error("Something went wrong, Please try again...")
            }
        } finally {
            setLoading(false);
        }
    };
    
    const navigateAPI = () =>{
        return navigate('/booking-confirmation-page');
    }

    return { isLoading, submitAPI, navigateAPI }
}

export default useSubmit;