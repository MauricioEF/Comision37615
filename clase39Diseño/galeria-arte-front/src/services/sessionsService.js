import AxiosClient from "./axiosClient";
import { getJSONHeaders } from "../utils/http";

const {REACT_APP_BASE_URL, REACT_APP_SESSIONS_ENDPOINT} = process.env; 

export default class SessionsService {
    constructor() {
        this.client = new AxiosClient();
    }

    login = ({body,callbackSuccess,callbackError}) => {
        const requestInfo =  {
            url: `${REACT_APP_BASE_URL}${REACT_APP_SESSIONS_ENDPOINT}/login`,
            body,
            config:getJSONHeaders(),
            callbackSuccess,
            callbackError
        }
        this.client.makePostRequest(requestInfo);
    }
    
}