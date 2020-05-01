import axios from 'axios'

class AuthenticationService {
    base_Url
    constructor() {
        this.base_Url = "/authentication/"
    }

    login(payload){
        console.log(payload)
        let url = this.base_Url + "login"
        return axios.post(url,payload).then(
            response => {
                localStorage.setItem("user-token",response.data.access_token)
            }
        )
    }

}

export const authenticationService = new AuthenticationService()