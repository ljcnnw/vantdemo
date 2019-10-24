<template>
    <div id="header">
        <van-tabs animated swipeable>
            <van-tab>
                <div slot="title">
                    <van-icon name="more-o"/>
                    首页
                </div>
                <Index/>
            </van-tab>
            <van-tab>
                <div slot="title">
                    <van-icon name="more-o"/>
                    其他
                </div>
                内容2
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Index from "@/components/public/Index";

    export default {
        name: "Header",
        object: {
            index: 2
        },
        components: {
            Index
        }
    }
</script>

<style scoped>

</style>
