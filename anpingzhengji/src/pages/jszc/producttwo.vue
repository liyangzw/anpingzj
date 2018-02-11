<template>
    <div class="support_one">
        <div class="support_one_title">
            <h3>技术支持</h3>
            <ul>
                <li>当前位置:</li>
                <li>主页></li>
                <li>新闻资讯></li>
                <li>技术支持</li>
            </ul>
        </div>
        <div class="support_one_text">
            <h3>声屏障反射原理</h3>
            <p>声屏障反射原理：当声源两侧均有声屏障，且声屏障平行时，声波将在声屏障间多次反射，并越过声屏障顶端辐射到受声点，它将会降低声屏障的插入损失，由反射声波引起的插入损失的降低量称之为反射降低量。</p>
            <p>用符号△Lt表示。 为减少反射声，一般在声屏障靠声源一侧附加吸声结构。反射声能的大小取决于吸声结构的吸声系数</p>
            <p class="pre_text">上一篇：公路声屏障的发展趋势  </p>
            <p class="next_text">声屏障材料选用总的原则是降噪效果性能良好</p>
        </div>
    </div>
</template>

<script>
    export default {
    
    
    }
</script>

<style scoped>
    ul li{
        list-style: none;
        float: left;
        line-height: 60px;
        margin-left: 5px;
        font-size: 16px;
    }
    .support_one{
        width: 66%;
        margin-left: 30%;
        border: 1px solid #ccc;
    }
    .support_one_title{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #ccc;
    }
    .support_one_title h3{
        float: left;
        line-height: 60px;
        padding-left:20px;
        padding-right: 10px;
        font-size: 24px;
        color:#2a95e5;
        height: 56px;
        border-bottom:4px solid #2a95e5 ;
    }
    .support_one_title ul{
        float: right;
        margin-right: 20px;
    }
    .support_one_text h3{
        width: 96%;
        height: 80px;
        margin-left:2%;
        border-bottom: 1px dashed #ccc;
        line-height: 80px;
        font-size: 26px;
        text-align: center;
        color: #c50000;
    }
    .support_one_text p {
        width: 90%;
        font-size: 20px;
        margin-left:5%; 
        line-height: 40px;
        text-indent:25px
    }
</style>
