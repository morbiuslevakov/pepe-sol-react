import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/api-utils';

export const useApiRequest = () => {
    const navigate = useNavigate();

    return useCallback(async (requestFunction, ...params) => {
        try {
            return await requestFunction(...params);
        } catch (error) {
            if (error.response && error.response.status === 444) {
                return await auth(window.Telegram.WebApp.initData);
            } else {
                throw error.response.data;
            }
        }
    }, [navigate]);
};