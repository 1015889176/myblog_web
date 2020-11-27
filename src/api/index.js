import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
export const user = { //房间注销
    // 用户登录
    userLogin: (data) => {
        return request({
            url: 'login',
            method: 'POST',
            data: data
        });
    },
    // 用户列表
    userList: (data) => {
        return request({
            url: '/users/userList',
            method: 'POST',
            data: data
        });
    },
    // 删除用户
    delUser: (data) => {
        return request({
            url: '/users/delUser',
            method: 'POST',
            data: data
        });
    }
}




