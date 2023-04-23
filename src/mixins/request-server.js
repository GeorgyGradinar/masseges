import axios from "axios";

const API_URL = 'http://127.0.0.1:8000';

export const requestServer = {
    method: {
        updateMessages(body) {
            axios.post(`${API_URL}/api/users`, {name: body.name, request_body: body.message});
        }
    }
};
