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
                <select id="exampleInputTag" name="tag">
                    <option>JavaScript</option>
                    <option>数据结构</option>
                    <option>算法</option>
                    <option>webpack</option>
                    <option>node</option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>其他</option>
                </select>

            </div>

            <textarea name="content" id=""></textarea>

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
    textarea {
        padding-left: 10px;
        width: 100%;
        height: 200px;

    }

</style>