<template>
    <div>
        <form action="/api/article/edit" method="post">
            <!--
            用来放一些不希望被用户看见，但是需要被提交到服务端的数据
           -->
            <input  type="hidden" name="_id" :value="article._id">
            <div class="form-group">
                <label for="exampleInputTitle">标题</label>
                <input type="text" class="form-control" id="exampleInputTitle" name="title" placeholder="title" :value="article.title">
            </div>
            <div class="form-group">
                <label for="exampleInputAbstract">简介</label>
                <input type="text" class="form-control" id="exampleInputAbstract" name="abstract" placeholder="abstract" :value="article.abstract">
            </div>
            <div class="form-group">
                <label for="exampleInputTag">标签</label>
                <input type="text" class="form-control" id="exampleInputTag" name="tagId" placeholder="tag" :value="article.tagId">
            </div>

            <textarea name="content" id="" cols="90" rows="10" :value="article.content"></textarea>

            <button type="submit" class="btn btn-primary">提交</button>
        </form>
    </div>

</template>

<script>
export default {
    data () {
        return {
            id:this.$route.params.id,
            article:{}
        }
    },
    created () {
        this.getArticleAndEdit()
    },
    methods: {
        getArticleAndEdit () {
            this.$http.get('/api/article/detail',{params:{_id:this.id}}).then(result=>{
                this.article = result.body.data[0]
            })
        }
    }
}
</script>


<style lang="scss" scoped>
    @media (max-width: 768px) {
        textarea {
            border: 1px solid #ccc;
        }
    }
    textarea {
        padding-left: 10px;
        width: 100%;
        height: 200px;

    }

</style>