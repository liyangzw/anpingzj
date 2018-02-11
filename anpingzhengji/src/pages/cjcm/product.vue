<template>
    <div class="pro-content">
        <div class="pro-name">
            <div class="title-items">车间厂貌</div>
            <div class="title-items title-index">
                <div class="title-items">首页</div>
                <div class="title-items">></div>
                <div class="title-items">车间厂貌</div>
            </div>
    
        </div>
        <ul class="pro">
            <li class="pro-inf" v-for="(items, index) in chanpin" key="'chaopin_'+ index">
                <img :src="items.imgsUrl" alt="" class="ban-img" />
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chanpin: [{
                        imgsUrl: require('../../img/1-16041ZT1125N.jpg'),
                        name: '公路隔音网',
                        http: '',
                        id: 'f1'
                    },
                    {
                        imgsUrl: require('../../img/1-16041ZT02JX.jpg'),
                        name: '金属声屏障',
                        http: '',
                        id: 'f2'
                    },
                    {
                        imgsUrl: require('../../img/1-16041ZT042K5.jpg'),
                        name: '声屏障板',
                        http: '',
                        id: 'f3'
                    },
                    {
                        imgsUrl: require('../../img/1-16041ZT0094a.jpg'),
                        name: '隔音声屏障',
                        http: '',
                        id: 'f4'
                    },
                    {
                        imgsUrl: require('../../img/1-16041ZT05I95.jpg'),
                        name: '冷却塔声屏障',
                        http: '',
                        id: 'f5'
                    },
                    {
                        imgsUrl: require('../../imgs/c2.jpg'),
                        name: '冷却塔声屏障',
                        http: '',
                        id: 'f5'
                    }
                ]
            };
    
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
        height: 1300px;
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
</style>
