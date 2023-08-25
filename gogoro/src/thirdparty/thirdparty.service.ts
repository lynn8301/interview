import axios from 'axios'
import { User, UserDetail } from './interfaces/thirdparty.interfaces';


export class ThirdPartyService {
    async getAllUserAPI(): Promise<User []> {
        const url = 'https://64d5e658754d3e0f13614839.mockapi.io/api/users'

        try {
            const res = await axios.get(url)
            return res.data
        } catch(error) {
            throw new Error('Fail User API')
        }
    }

    async getAllUserDetail(): Promise<UserDetail []> {
        const url = `https://64d5e658754d3e0f13614839.mockapi.io/api/user-detail/`
        try {
            const res = await axios.get(url)
            return res.data
        } catch(error) {
            throw new Error('Fail All User Detial API')
        }
    }
}