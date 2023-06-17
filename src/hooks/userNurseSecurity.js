import {
    useEffect,
    useState
} from "react"

const useNurse = email => {
    const [isNurse, setIsNurse] = useState(false);
    const [isNurseLoading, setIsNurseLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://hospital-management-server-one.vercel.app/user/Nurse/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsNurse(data.isNurse);
                    setIsNurseLoading(false);
                })
        }
    }, [email])
    return [isNurse, isNurseLoading]
}

export default useNurse;