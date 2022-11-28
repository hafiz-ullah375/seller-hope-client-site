import { useEffect, useState } from "react"

const useBuyer = email => {
    const [buyer, setBuyer] = useState(false)
    const [buyerLoader, setBuyerLoaders] = useState(true)
    useEffect(
        () => {
            if (email) {
                fetch(`http://localhost:4000/user/buyer/${email}`)
                    .then(res => res.json())
                    .then(data => {

                        setBuyer(data?.buyer)
                        setBuyerLoaders(false)
                        console.log(data);

                    })
            }
        }, [email])
    return [buyer, buyerLoader]


}
export default useBuyer;