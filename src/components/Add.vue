<template>
    <div>
        <form action="/api/article/upload" method="post">
            <div class="form-group">
                <label for="exampleInputTitle">标题</label>
                <input type="text" class="form-control" id="exampleInputTitle" name="title" placeholder="title">
            </div>
            <div class="form-group">
                <label for="exampleInputAbstract">简介</label>
                <input type="text" class="form-control" id="exampleInputAbstract" name="abstract" placeholder="abstract">
            </div>
            <div class="form-group">
                <label for="exampleInputTag">标签</label>
                <input type="text" class="form-control" id="exampleInputTag" name="tag" placeholder="tag">
            </div>

            <textarea name="content" id="" cols="30" rows="10"></textarea>

            <button type="submit" class="btn btn-primary">上传</button>
        </form>
    </div>

</template>

<script>

</script>


<style lang="scss" scoped>
    @media (max-width: 768px) {
        textarea {
            border: 1px solid #ccc;
        }
    }

</style>