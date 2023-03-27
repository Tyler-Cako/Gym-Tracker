import axios from 'axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        })
        setAuth(prev => {
            console.log("test")
            console.log(JSON.stringify(prev))
            console.log(response.data.token)
            return {...prev, token: response.data.token}
        })

        return response.data.accessToken
    }

    return refresh
}

export default useRefreshToken