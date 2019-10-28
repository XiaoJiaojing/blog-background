<template>
        <div class="content">
            <div class="top baseStyle">
                <span class="fa fa-bars" @click="xianshi" ref="topbar"></span>
                <p>后台文件管理</p>
            </div>

            <!--左侧导航栏-->
            <div class="left baseStyle leftCommonStyle" ref="leftnav">

                <router-link class="supai" to="/all" >
                    <span class="fa fa-home"></span>
                    <span>管理</span>
                </router-link>
                <router-link class="supai" to="/upload">
                    <span class="fa fa-send"></span>
                    <span>新建</span>
                </router-link>
            </div>

            <!--右侧内容区域-->
            <div class="right" ref="conright">
                <router-view></router-view>

            </div>
        </div>
</template>


<script>

    export default {
        data () {
            return {

            }
        },
        methods: {
            xianshi () {
                if(this.$refs.topbar.className === 'fa fa-bars'){
                    this.$refs.topbar.className = 'fa fa-close'
                } else if(this.$refs.topbar.className = 'fa fa-close'){

                    // this.$refs.topbar.className === 'fa fa-bars'
                    this.$refs.topbar.className = ('fa fa-bars')
                }

                if(this.$refs.leftnav.style.display === ''){
                    this.$refs.leftnav.style.display ='block'
                    this.$refs.conright.style.marginLeft = '250px'
                    this.$refs.topbar.style.marginLeft = '250px'
                } else if (this.$refs.leftnav.style.display === 'block'){
                    this.$refs.leftnav.style.display =''
                    this.$refs.conright.style.marginLeft = ''
                    this.$refs.topbar.style.marginLeft = ''

                }
            }
        }
    }


</script>


<style lang="scss" scoped>

    /*提取公共样式*/
    .baseStyle {
        position: fixed;
        color: #fff;
        text-align: center;
    }

    /*将左边导航栏的公共样式进行封装*/
    .leftCommonStyle{
        padding-top: 200px;
        height: 100%;
        background-color: dimgrey;
        float: left;
    }
    /*左侧导航栏每个li的排列样式*/
    .supai {
        display: block;
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: #fff;
        text-decoration: none;
        .fa {
            margin-right: 10px;
        }
    }
    @media (max-width: 768px) {
        .top {
            span {
                font-size: 24px;
                float: left;
                padding-left: 10px;
                padding-top: 13px;
            }
            width: 100%;
            height: 50px;
            background-color: grey;
            line-height: 50px;
        }
        .left {
            display: none;
            h5 {
                display: block;
            }
            width: 250px;

        }
        .right {
            padding-top: 70px;
            padding-left: 15px;
            padding-right: 15px;
        }
    }
    @media (min-width: 768px) {
        .top {
            display: none;

        }
        .content {
            .left {
                h5 {
                    display: none;
                }
                width: 90px;
            }
            .right {
                margin-left: 140px;
                padding-right: 30px;
            }

        }
    }
    @media (min-width: 992px) {
        .top {
            display: none;
        }
        .content {
            .left {
                h5 {
                    display: block;
                }
                width: 250px;

            }
            .right {
                margin-left: 300px;
                padding-top: 50px;
                padding-right: 30px;
            }
        }
    }
</style>