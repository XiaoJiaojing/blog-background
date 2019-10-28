<template>
    <div>
        <table class="table table-striped">
            <tr>
                <th>文件管理</th>

            </tr>
            <tr v-for="item in totalArticles" :key="item._id">
                <td>{{item.title}}</td>
            </tr>
        </table>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                totalArticles: []
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