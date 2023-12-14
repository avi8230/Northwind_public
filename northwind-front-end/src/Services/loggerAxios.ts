import axios from "axios";

const loggerAxios = axios.create();

loggerAxios.interceptors.request.use(request => {
    console.log("Start Request: ", request);
    return request;
});

loggerAxios.interceptors.response.use(response => {
    console.log("Got Response: ", response);
    return response;
});

export default loggerAxios;