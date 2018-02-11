<template>
    <div class="content-news">
        <div class="news-name">产品系列</div>
        <div class="new-div">声屏障系列</div>
        <div class="new-div">公路隔音墙</div>
        <div class="new-div">金属声屏障</div>
        <div class="new-div">声屏障板</div>
        <div class="new-div">隔音声屏障</div>
        <div class="new-div">冷却塔声屏障</div>
        <div class="new-div">高铁声屏障</div>
        <div class="new-div">铁路声屏障</div>
        <div class="new-div">桥梁声屏障</div>
        <div class="new-div">小区声屏障</div>
        <div class="new-div">公路声屏障</div>
        <div class="new-div">防风网系列</div>
        <div class="new-div">防风抑尘网</div>
        <div class="new-div">挡风网</div>
        <div class="new-div">防风网</div>
        <div class="new-div">挡风墙</div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
    .content-news {
        float: left;
        width: 25%;
        height: 900px;
       
    }
    
    .news-name {
        background-color: #2a95e5;
        text-align: center;
        border-radius: 20px 20px 0 0;
        height: 80px;
        color: #fff;
         line-height: 80px;
        font-size: 24px;
        text-align: center;
    }
/*     
    .news-ul {
        width: 90%;
        height: 900px;
        margin-left: 30px;
        margin-top: 20px;
    } */
    
    .new-div {
        width: 100%;
        border: 1px solid #ccc;
        border-bottom: 0;
        display: block;
        height: 60px;
        text-decoration: none;
        color: #000;
        line-height: 60px;
        font-size: 20px;
        text-align: center;
    }

    .new-div:hover{
        background: #2a95e5;
    }

    .new-div:last-child {
        border-bottom: 1px solid #ccc;
    }
    
    .news-title {
        text-decoration: none;
        color: #000;
        line-height: 40px;
        font-size: 20px;
        width: 90%;
        /* border-bottom: 1px solid #ccc; */
    }
</style>
