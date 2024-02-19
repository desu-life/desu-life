import axios, { AxiosError, type AxiosResponse } from 'axios';
import config from '../config'
// import { useRouter } from 'vue-router'

// const router = useRouter();

// 创建 axios 实例
const service = axios.create({
    baseURL: config.api.baseURL,
    timeout: 10000
});

// 创建请求拦截
service.interceptors.request.use(
    (config: any) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error: any) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 创建响应拦截
service.interceptors.response.use(
    (response: any) => {
        // 对响应数据做点什么
        // let data = response.data;
        return response;
    },
    (error: AxiosError) => {
        // 对响应错误做点什么
        let message = "";
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    message = "请求错误";
                    break;
                case 401:
                    message = "未授权，请登录";
                    // router.push("/login");
                    break;
                case 403:
                    message = "拒绝访问";
                    break;
                case 404:
                    message = `请求地址出错: ${error.response.config.url}`;
                    break;
                case 408:
                    message = "请求超时";
                    break;
                case 500:
                    message = "服务器内部错误";
                    break;
                case 501:
                    message = "服务未实现";
                    break;
                case 502:
                    message = "网关错误";
                    break;
                case 503:
                    message = "服务不可用";
                    break;
                case 504:
                    message = "网关超时";
                    break;
                case 505:
                    message = "HTTP版本不受支持";
                    break;
                default:
                    message = "未知错误";
                    break;
            }
        }
        return Promise.reject({error, message} as ResponseError);
    }
);

export default service;

export interface ResponseError {
    error: AxiosError;
    message: string;
}
