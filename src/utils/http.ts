import axios, {
  AxiosInstance,
  AxiosProxyConfig,
  AxiosRequestConfig
} from 'axios';

export class Http {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
    this.instance.interceptors.response.use(
      (res) =>
        res.data.c === 0
          ? Promise.resolve(res.data.d)
          : Promise.reject(new Error(res.data.m)),
      (error) => Promise.reject(error)
    );
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post(url, data, config);
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.put(url, data, config);
  }

  delete<T = any>(url: string, config?: AxiosProxyConfig): Promise<T> {
    return this.instance.delete(url, config);
  }
}

export default new Http();
