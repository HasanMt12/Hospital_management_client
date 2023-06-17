import {
    useEffect,
    useState
} from "react"

const useDoctor = email => {
    const [isDoctor, setIsDoctor] = useState(false);
    const [isDoctorLoading, setIsDoctorLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://hospital-management-server-one.vercel.app/user/doctors/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsDoctor(data.isDoctor);
                    setIsDoctorLoading(false);
                })
        }
    }, [email])
    return [isDoctor, isDoctorLoading]
}

export default useDoctor;