import axios from 'axios';

export const requestSignIn = () => {
    return axios.post('http://localhost:3002/auth/sign_in', { email: 'a@a.ru', password: 'aa123456' }).then((res) => {
        return res;
    });
};

export const requestValidateToken = () => {
    return axios.get('http://localhost:3002/auth/validate_token', { headers: {} }).then((res) => {
        return res;
    });
};

export const requestGetPosts = () => {
    return axios.get('http://localhost:3002/api/v1/posts', { headers: {} }).then((res) => {
        return res;
    });
};

export const requestCreatePost = () => {
    return axios.post('http://localhost:3002/api/v1/posts', { title: 'Title', content: 'Content' }, { headers: {} }).then((res) => {
        return res;
    });
};
