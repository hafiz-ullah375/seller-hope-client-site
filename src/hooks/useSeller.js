import { useEffect, useState } from "react"

const useSeller = email => {
    const [seller, setSeller] = useState(false)
    const [sellerLoader, setSellerLoaders] = useState(true)
    useEffect(
        () => {
            if (email) {
                fetch(`http://localhost:4000/user/seller/${email}`)
                    .then(res => res.json())
                    .then(seller => {

                        setSellerLoaders(false)
                        setSeller(seller?.seller)


                    })
            }
        }, [email])
    return [seller, sellerLoader]


}
export default useSeller;