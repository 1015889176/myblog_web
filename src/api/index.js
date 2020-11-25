import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

// 用户登录
export const userLogin = (data) => {
    return request({
        url: 'login',
        methods: 'POST',
        data: {}
    });
};
