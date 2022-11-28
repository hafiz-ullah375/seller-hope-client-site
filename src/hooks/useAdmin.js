import { useEffect, useState } from "react"

const useAdmin = email => {
    const [admin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://sellers-hope-server.vercel.app/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setAdmin(data.admin);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [admin, isAdminLoading]
}

export default useAdmin;