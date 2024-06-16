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
        axios.post(`${apiUrl}/auth/authenticate`, { initData })
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
        axios.get(`${apiUrl}/tasks/get-tasks?id=${id}`, apiConfig)
            .then(response => {
                return response.data.body;
            })
            .catch(error => {
                console.error('Error during authentication:', error);
            });
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
