<template>
    <div class="index_support">
        <div class="news_cont">
            <div class="support_news">
                <h3 class="news_items_h3">技术支持News</h3>
                <div class="news_items_more">more</div>
            </div>
            <ul class="news_items">
                <li class="index-support" v-for="(items,index) in  newsSupport" :key="'support_'+index">
                    <router-link :to="items.link" :id="index"> {{items.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="news_cont">
            <div class="support_news">
                <h3 class="news_items_h3">技术支持News</h3>
                <div class="news_items_more">more</div>
            </div>
    
            <ul class="news_items">
                <li class="index-support" v-for="(items,index) in  supportItems" :key="'supportItems_'+index">
                    {{items.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                "newsSupport": [{
                    "title": "声屏障材料选用总的原则是降噪效果性",
                    "id": "1",
                    "link": "/jszc/1"
                }, {
                    "title": "声屏障反射原理",
                    "id": "2",
                    "link": "/jszc/2"
                }, {
                    "title": "公路声屏障的发展趋势",
                    "id": "3",
                    "link": "/jszc/3"
                }, {
                    "title": "噪声杀手-声屏障",
                    "id": "4",
                    "link": "/jszc/4"
                }, {
                    "title": "声屏障安装注意事项",
                    "id": "5",
                    "link": "/jszc/5"
                }, {
                    "title": "凹凸面声屏障的特色",
                    "id": "6",
                    "link": "/jszc/6"
                }, {
                    "title": "冷却塔声屏障组合拼装式",
                    "id": "7",
                    "link": "/jszc/7"
                }, {
                    "title": "铁路声屏障，高度在1m一5m间",
                    "id": "8",
                    "link": "/jszc/8"
                }],
                "supportItems": [{
                    "title": "声屏障材料选用总的原则是降噪效果性",
                    "id": "1",
                    "link": "/jszc/1"
                }, {
                    "title": "声屏障反射原理",
                    "id": "2",
                    "link": "/jszc/2"
                }, {
                    "title": "公路声屏障的发展趋势",
                    "id": "3",
                    "link": "/jszc/3"
                }, {
                    "title": "噪声杀手-声屏障",
                    "id": "4",
                    "link": "/jszc/4"
                }, {
                    "title": "声屏障安装注意事项",
                    "id": "5",
                    "link": "/jszc/5"
                }]
            }
        }
    }
</script>

<style scoped>
    .index_support{
        overflow: hidden;
        width: 100%;
    }
    .news_cont{
        float: left;
        width: 30%;
    }
    .support_news{
        width: 95%;
        height: 60px;
        background: #127dce;
        margin-left:10%
    }
    /* .news_items{
        overflow: hidden;
    } */
    .news_items li{
        line-height: 40px;
        font-size: 20px;
    }
    .news_cont ul {
        margin: 5% 0 5% 15%;
        
    }
    .news_items_h3{
        float: left;
        line-height: 60px;
        color: #fff;
        font-size: 24px;
        margin-left:20px;
        font-weight: 100;
    }
    .news_items_more{
        float:right;
        line-height: 60px;
        color: #fff;
        font-size: 20px;
        margin-right: 20px;
        font-weight: 100;
        cursor: pointer;
    }
</style>
