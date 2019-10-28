<template>
    <div>
        <table class="table table-striped">
            <tr>
                <th>文件管理</th>
                <th>操作</th>
                <th>操作</th>

            </tr>
            <tr v-for="item in totalArticles" :key="item._id">
                <td>{{item.title}}</td>
                <td><router-link :to="'/api/article/edit/'+item._id">编辑</router-link></td>
                <td><a :href="'/api/article/delete/?_id='+item._id">删除</a></td>
            </tr>

        </table>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                totalArticles: [],
                id:this.$route.params.id
            }
        },
        created () {
            this.getAll()
        },
        methods: {
            getAll () {
                this.$http.get('/api/allArticles').then(result=>{
                    this.totalArticles = result.body.data
                })
            }
        }
    }
</script>


<style class="scss" scoped>


</style>