import axios from "axios";

// const apiUrl = "https://api.deaslide.com/v1";
const apiUrl = "https://api.nextgenpepe.xyz/v1";

export const apiConfig = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const fetchData = async (initData) => {

    try {
        axios.post(`${apiUrl}/auth`, { initData })
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
