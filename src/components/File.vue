<template>
    <div>
        <table class="table table-striped">
            <tr>
                <th>文件管理</th>

            </tr>
            <tr v-for="item in msg" :key="item._id">
                <td>{{item.title}}</td>
            </tr>
        </table>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: []
            }
        },
        created () {
            this.getAll()
        },
        methods: {
            getAll () {
                this.$http.get('/all').then(result=>{
                    console.log(result)
                    this.msg = result.body.msg
                })
            }
        }
    }
</script>


<style class="scss" scoped>

</style>