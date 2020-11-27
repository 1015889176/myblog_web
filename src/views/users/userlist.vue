<!--  -->
<template>
    <div class="userlist">
        <el-card>
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="用户名称：">
                    <el-input
                        class="input"
                        show-word-limit
                        v-model="search.userName"
                        clearable
                        size="mini"
                        placeholder="用户名称"
                    ></el-input>
                </el-form-item>
                <el-form-item label="用户账号：">
                    <el-input class="input" v-model="search.userCount" clearable size="mini" placeholder="用户账号"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                    <el-select class="input" size="mini" v-model="search.gender">
                        <el-option label="性别(全部)" :value="null"></el-option>
                        <el-option :label="'男'" :value="1"></el-option>
                        <el-option :label="'女'" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" plain size="mini" @click="searchData">搜索</el-button>
                </el-form-item>
            </el-form>

            <el-table :data="list" border style="width: 100%">
                <el-table-column prop="userId" label="用户ID"></el-table-column>
                <el-table-column prop="userName" label="用户昵称"></el-table-column>
                <el-table-column prop="userCount" label="用户账号"></el-table-column>
                <el-table-column prop="password" label="用户密码"></el-table-column>
                <el-table-column prop="gender" label="性别">
                    <template slot-scope="scope">
                        {{ scope.row.gender == 1 ? '男' : '女' }}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="340">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)" type="success">编辑</el-button>
                        <el-button size="mini" @click="del(scope.row)" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                style="text-align: center; margin-top: 10px"
                size="mini"
                :hide-on-single-page="true"
                background
                layout="prev, pager, next"
                :current-page="currentPage"
                :total="total"
                @current-change="logPageChange"
            ></el-pagination>
        </el-card>
    </div>
</template>

<script>
import { user } from '@/api/index';
export default {
    components: {},
    data() {
        return {
            search: {
                pageSize: 10,
                pageNum: 1,
                userName: null,
                userCount: null,
                gender: null
            },
            tableData: null,
            list: [],
            currentPage: null,
            total: null
        };
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        setTimeout(() => {
            this.searchData();
        }, 300);
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    computed: {},
    watch: {},
    methods: {
        searchData() {
            // 搜索功能
            if (this.search.userName == '') {
                this.search.userName = null;
            }
            if (this.search.userCount == '') {
                this.search.userCount = null;
            }
            if (this.search.gender == '' && this.search.gender != 0) {
                this.search.gender = null;
            }
            user.userList(this.search).then((res) => {
                if (res.code == 200) {
                    this.list = res.data.list;
                    this.currentPage = res.data.currentPage;
                    this.total = res.data.total;
                }
                if (res.code == 500) {
                    this.$message.error(res.message);
                    return;
                }
            });
        },
        logPageChange(e) {
            console.log(e);
        },
        edit(row) {
            console.log(row);
        },
        del(row) {
            user.delUser({ userId: row.userId }).then((res) => {
                if (res.code == 200) {
                    this.$message.success(res.message);
                    this.searchData();
                }
                if (res.code == 500) {
                    this.$message.error(res.message);
                    return;
                }
            });
        }
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
.userlist {
    .fenye {
        text-align: center;
        margin-top: 1%;
    }

    .el-form--inline .el-form-item {
        margin: 0;
        margin-right: 0.2%;
    }
    .but {
        width: 100%;
        float: left;
        margin-bottom: 5px;
    }
    .daochu {
        float: right;
        margin-right: 8px;
    }
    .input {
        width: 160px;
        margin-right: 20px;
    }
}
</style>