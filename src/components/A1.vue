<template>
    <div>
        <el-table :data="list" border style="width: 50%">
            <el-table-column prop="name" label="姓名" :style="{backgroundColor:'red'}"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
        </el-table>
    </div>
</template>

<script>

export default {
    name: "A1",
    data() {
        return {
            list: [
                {id: 1, name: '张三', age: 20},
                {id: 2, name: '李四', age: 21},
                {id: 3, name: '王五', age: 24}
            ]
        }
    }
}
</script>

<style>
.el-table th {
    text-align: center !important;
}
</style>
<style scoped>

</style>
