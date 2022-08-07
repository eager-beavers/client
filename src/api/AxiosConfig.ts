import axiosConfig from "axios";

axiosConfig.interceptors.request.use(
    function (req) {
        console.log("request");

        return req;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosConfig.interceptors.response.use(
    function (res) {
        console.log("response");

        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export {axiosConfig as axios};