import axios from "axios";

// const apiUrl = "https://api.deaslide.com/v1";
const apiUrl = "https://api.nextgenpepe.ru/v1";

export const apiConfig = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const auth = async (initData) => {

    try {
        axios.post(`${apiUrl}/auth/authenticate`, { initData }, apiConfig)
            .then(response => {
                const data = response.data;
                if (data.success) {
                    console.log('User authenticated successfully:', data.user);
                } else {
                    console.error('Authentication failed:', data.error);
                }
            })
            .catch(error => {
                console.error('Error during authentication:', error);
            });
    } catch (error) {
        throw error.response.data
    }
};

export const getTask = async (id) => {

    try {
        const response = await axios.get(`${apiUrl}/tasks/get-tasks?id=${id}`, apiConfig);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const completeTask = async (id, taskId) => {
    try {
        const response = await axios.get(`${apiUrl}/tasks/complete?id=${id}&taskId=${taskId}`, apiConfig);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const test = async () => {

    try {
        axios.get(`${apiUrl}/test`, apiConfig)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error during authentication:', error);
            });
    } catch (error) {
        throw error.response.data;
    }
};
