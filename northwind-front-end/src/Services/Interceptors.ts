import axios from 'axios';
import authService from './AuthService';

function createInterceptors(): void {

    // https://rapidapi.com/guides/request-headers-axios
    axios.interceptors.request.use(config => {
        config.headers['authorization'] = "Bearer " + authService.token;
        return config;
    });

}

export default createInterceptors;