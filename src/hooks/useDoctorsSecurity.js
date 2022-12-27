import {
    useEffect,
    useState
} from "react"

const useSeller = email => {
    const [isDoctor, setIsDoctor] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/doctors/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsDoctor(data.isSeller);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isDoctor, isSellerLoading]
}

export default useSeller;