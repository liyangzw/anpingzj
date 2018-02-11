<template>
    <div class="pro-content">
        <div class="pro-name">
            <div class="title-items">联系我们</div>
            <div class="title-items title-index">
                <div class="title-items" @click="handleback">首页</div>
                <div class="title-items">></div>
                <div class="title-items">联系我们</div>
            </div>
    
        </div>
        <div class="pro">
            <div class="content-bot" height="600px">
                <h2 class="content-qyjj">联系方式</h2>
                <div class="footer-name name">联系人：孟经理 手机：15127851145 </div>
                <div class="footer-name"> 电话：0318-7660044 传真：0318-7988789 </div>
                <div class="footer-name">邮箱：1325185042@qq.com 地址：河北省衡水市安平县徐疃工业园区</div>
                <div class="footer-name">网址：www.anpingzhengji.com</div>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
           
        },
        methods: {
            handleback: function() {
                history.go(-1)
            }
        }
    }
</script>

<style scoped>
    .pro-content {
        float: left;
        width: 70%;
    }
    
    .pro-name {
        width: 97%;
        height: 60px;
        font-size: 20px;
        font-weight: 700;
        line-height: 60px;
        /* border-bottom: 1px solid #ccc; */
        margin-left: 5%;
        padding-left: 3%;
        background: #2a95e5;
        color: #fff;
    }
    
    .pro {
        width: 100%;
        height: 1000px;
        margin: 20px 0 0 60px;
        border: 1px solid #ccc;
    }
    
    .pro-inf {
        float: left;
        width: 450px;
        height: 400px;
        list-style: none;
        margin-left: 8%;
        margin-top: 2%;
    }
    
    .produit {
        width: 280px;
        height: 250px;
    }
    
    .proinf-name {
        width: 280px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
    }
    
    .proinf-title {
        color: #000;
    }
    
    .ban-img {
        width: 450px;
        height: 350px;
    }
    
    .title-items {
        float: left;
    }
    
    .title-index {
        float: right;
        margin-right: 20px;
    }
     .content-bot{
       width: 1220px;
       height: 700px;
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
   .content-qyjj {
       width: 1220px;
       height: 60px;
       text-align: center;
       line-height: 60px;
       font-size: 30px;
       border-bottom: 1px dashed #ccc;
   }
   .footer-name {
        font-size: 30px;
        width: 1220px;
        height: 60px;
        line-height: 60px;
    }
    .name {
        margin-top: 40px;
    }
</style>
