import {
    useEffect
} from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Doctors planet`;
    }, [title])
};

export default useTitle;