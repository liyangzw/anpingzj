<template>
	<div class="content">
        <index-header></index-header>
        <div class="breadcrumb">
            <div class="crumb"><a href="http://localhost:8080/#/">首页</a></div>
            <div class="crumb"><i class="el-icon-arrow-right"></i></div>
            <div class="crumb">新闻资讯</div>
        </div>
        <div class="content-news1">
            <h2 class="news-name1">新闻资讯</h2>
            <ul class="news-ul1">
                <li class="new-li1"><a href="http://localhost:8080/#/xwzx/spzts" class="news-title">凹凸面声屏障的特色</a></li>
                <li class="new-li1"><a href="http://localhost:8080/#/xwzx/lqtspz" class="news-title">冷却塔声屏障组合拼装式</a></li>
                <li class="new-li1"><a href="http://localhost:8080/#/xwzx/tlspz" class="news-title">铁路声屏障，高度在1m一5m间</a></li>
                <li class="new-li1"><a href="http://localhost:8080/#/xwzx/gtlspz" class="news-title">非金属高铁路基声屏障介绍</a></li>
                <li class="new-li1"><a href="http://localhost:8080/#/xwzx/tlspz" class="news-title"> 声屏障降噪截止频率</a></li>
            </ul>
            <div class="news-num">共1页 5条记录</div>
        </div>
    </div>
</template>

<script>
import header from '../components/header';

export default {
	components: {
		"index-header": header
	}
}
</script>
<style scoped>
    .content {
        width: 1220px;
        margin: 0 auto;
    }
    .breadcrumb {
        width: 1220px;
        height: 40px;
        background: #ccc;
    }
    .crumb {
        float: left;
        margin: 0 10px;
        line-height: 40px;
    }
    .content-news1 {
        float: left;
        width: 100%;
        height: 400px;
        /* background-color: #ccc; */
    }
    .news-name1 {
        width: 100%;
        height: 60px;
        font-size: 30px;
        font-weight: 900;
        line-height: 60px;
        border-bottom: 1px dashed #ccc;
        text-align: center;
    }
    .news-ul1 {
        width: 95%;
        height: 240px;
        border-bottom: 1px dashed #ccc;
        margin: 10px 0 0 30px;
    }
    .news-li1 {
        width: 100%;
        border-bottom: 1px dashed #ccc;
        display: block;
        height: 40px;
    }
    .news-title {
        text-decoration: none;
        color: #000;
        line-height: 40px;
       
        width: 90%;
    }
    .news-num {
        width: 130px;
        height: 30px;
        margin: 10px auto;
        border: 1px solid #000;
        text-align: center;
        line-height: 30px;
    }
</style>
