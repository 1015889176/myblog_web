<!-- 文章管理 -->
<template>
    <el-card class="articlelist">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="文章名称">
                <el-input v-model="search.title" placeholder="文章名称"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="search.author" placeholder="作者"></el-input>
            </el-form-item>
            <el-form-item label="文章分类">
                <el-input v-model="search.categoryId" placeholder="分类"></el-input>
            </el-form-item>
            <el-form-item label="发表时间">
                <el-input v-model="search.date" placeholder="时间"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            search: {
                title: null,
                author: null,
                categoryId: null,
                date: null
            },
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        };
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
        search() {}
    },
    computed: {}
};
</script>
<style lang='scss' scoped>
</style>