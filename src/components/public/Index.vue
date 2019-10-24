<template>
    <div id="index">
        <div id="top">
            <van-swipe :autoplay="3000" indicator-color="white" id="swipe">
                <van-swipe-item class="swipe-item">1</van-swipe-item>
                <van-swipe-item class="swipe-item">2</van-swipe-item>
                <van-swipe-item class="swipe-item">3</van-swipe-item>
                <van-swipe-item class="swipe-item">4</van-swipe-item>
            </van-swipe>
        </div>
        <div id="content">
            <van-divider class="divider">热门文章</van-divider>
            <van-cell-group style="background-color: #FBFBFB;">
                <van-card style="background-color: white;margin-bottom: 5px">
                    <div slot="thumb">
                        <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" fit="cover" style="width: 90px;height: 90px">
                            <template v-slot:loading>
                                <van-loading type="spinner" size="20" />
                            </template>
                        </van-image>
                    </div>
                    <div slot="title" style="font-size: x-large">标题</div>
                    <div slot="desc" style="margin-top: 10px;font-size: medium;color: gray">作者</div>
                </van-card>
                <van-card style="background-color: white;margin-bottom: 5px">
                    <div slot="thumb">
                        <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" fit="cover" style="width: 90px;height: 90px">
                            <template v-slot:loading>
                                <van-loading type="spinner" size="20" />
                            </template>
                        </van-image>
                    </div>
                    <div slot="title" style="font-size: x-large">标题</div>
                    <div slot="desc" style="margin-top: 10px;font-size: medium;color: gray">作者</div>
                </van-card>
            </van-cell-group>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>
    #swipe {
        height: 200px;
    }

    .swipe-item {
        background-color: skyblue;
        height: 100%;
    }
    .divider{
        color: cadetblue;
        border-color: cadetblue;
    }
</style>
