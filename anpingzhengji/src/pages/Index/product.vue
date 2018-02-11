<template>
    <div class="pro-content">
        <h2 class="pro-name">产品展示</h2>
        <ul class="pro">
            <li class="pro-inf" v-for="(items, index) in chanpin" key="'chaopin_'+ index">
                <img :src="items.imgsUrl" alt="" class="ban-img" />
                <div class="proinf-name"><a href="#" class="proinf-title">{{items.name}}</a></div>
            </li>
    
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chanpin: [{
                        imgsUrl: require('../../img/1-1G225155140D7-lp.jpg'),
                        name: '公路隔音网',
                        http: '',
                        id: 'f1'
                    },
                    {
                        imgsUrl: require('../../img/1-1G22515450aa-lp.jpg'),
                        name: '金属声屏障',
                        http: '',
                        id: 'f2'
                    },
                    {
                        imgsUrl: require('../../img/1FUT532-0-lp.jpg'),
                        name: '声屏障板',
                        http: '',
                        id: 'f3'
                    },
                    {
                        imgsUrl: require('../../img/1FJ44041-0-lp.jpg'),
                        name: '隔音声屏障',
                        http: '',
                        id: 'f4'
                    },
                    {
                        imgsUrl: require('../../img/1-1G2251524151E-lp.jpg'),
                        name: '冷却塔声屏障',
                        http: '',
                        id: 'f5'
                    },
                    {
                        imgsUrl: require('../../img/1-1G225151P5226-lp.jpg'),
                        name: '高铁声屏障',
                        http: '',
                        id: 'f6'
                    },
                    {
                        imgsUrl: require('../../img/1-1G22513591L36-lp.jpg'),
                        name: '铁路声屏障',
                        http: '',
                        id: 'h1'
                    },
                    {
                        imgsUrl: require('../../img/1-1G22513534AI-lp.jpg'),
                        name: '桥梁声屏障',
                        http: '',
                        id: 'h2'
                    },
                    {
                        imgsUrl: require('../../img/1A4035259-0-lp.jpg'),
                        name: '小区声屏障',
                        http: '',
                        id: 'h3'
                    },
                    {
                        imgsUrl: require('../../img/1-1G225155140D7-lp.jpg'),
                        name: '公路声屏障',
                        http: '',
                        id: 'h4'
                    },
                    {
                        imgsUrl: require('../../img/14202M625-0-lp.jpg'),
                        name: '防风抑尘网',
                        http: '',
                        id: 'h5'
                    },
                    {
                        imgsUrl: require('../../img/1103212G7-0.jpg'),
                        name: '挡风网',
                        http: '',
                        id: 'h6'
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
        width: 1200px;
        margin: 20px 0 0 60px;
    }
    
    .pro-inf {
        float: left;
        width: 300px;
        height: 300px;
        list-style: none;
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
        width: 280px;
        height: 250px;
    }
</style>
