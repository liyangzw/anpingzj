<template>
	<div class="pro-content">
        <index-header></index-header>
        <div class="breadcrumb">
            <div class="crumb" @click="handleback">首页</div>
            <div class="crumb"><i class="el-icon-arrow-right"></i></div>
            <div class="crumb">产品中心</div>
        </div>
        <ul class="pro">
            <li class="pro-inf" v-for="(items, index) in chanpin" :key="'chaopin_'+ index">
                <img :src="items.imgsUrl" alt=""  class="ban-img"/>
                <div class="proinf-name"><a href="#">{{items.name}}</a></div>
            </li>
           
        </ul>
    </div>
</template>

<script scoped>
import header from '../components/header';
import footer from '../components/footer';
export default {
    data() {
        return {
            chanpin:[
                {
                    imgsUrl:require('../../imgs/f1.jpg'),
                    name:'防风网',
                    http: '',
                    id: 'f1'
                },
                {
                    imgsUrl:require('../../imgs/f2.jpg'),
                    name:'防风网',
                    http: '',
                    id: 'f2'
                },
                {
                    imgsUrl:require('../../imgs/f3.jpg'),
                    name:'防风网',
                    http: '',
                    id: 'f3'
                },
                {
                    imgsUrl:require('../../imgs/f4.jpg'),
                    name:'防风网',
                    http: '',
                    id: 'f4'
                },
                {
                    imgsUrl:require('../../imgs/f5.jpg'),
                    name:'防风网',
                    http: '',
                    id: 'f5'
                },
                {
                    imgsUrl:require('../../imgs/f6.jpg'),
                    name:'防风网',
                    http: '',
                    id: 'f6'
                },
                {
                    imgsUrl:require('../../imgs/h1.jpg'),
                    name:'护栏板',
                    http: '',
                    id: 'h1'
                },
                {
                    imgsUrl:require('../../imgs/h2.jpg'),
                    name:'护栏板',
                    http: '',
                    id: 'h2'
                },
                {
                    imgsUrl:require('../../imgs/h3.jpg'),
                    name:'护栏板',
                    http: '',
                    id: 'h3'
                },
                {
                    imgsUrl:require('../../imgs/h4.jpg'),
                    name:'护栏板',
                    http: '',
                    id: 'h4'
                },
                {
                    imgsUrl:require('../../imgs/h5.jpg'),
                    name:'护栏板',
                    http: '',
                    id: 'h5'
                },
                 {
                    imgsUrl:require('../../imgs/h6.jpg'),
                    name:'护栏板',
                    http: '',
                    id: 'h6'
                },
                {
                    imgsUrl:require('../../imgs/g1.jpg'),
                    name:'声屏障',
                    http: '',
                    id: 'g1'
                },
                {
                    imgsUrl:require('../../imgs/g4.jpg'),
                    name:'声屏障',
                    http: '',
                    id: 'g2'
                },
                {
                    imgsUrl:require('../../imgs/g2.jpg'),
                    name:'声屏障',
                    http: '',
                    id: 'g3'
                },
                {
                    imgsUrl:require('../../imgs/g3.jpg'),
                    name:'声屏障',
                    http: '',
                    id: 'g4'
                },
                {
                    imgsUrl:require('../../imgs/gl1.jpg'),
                    name:'隔离栅',
                    http: '',
                    id: 'gl1'
                },
                {
                    imgsUrl:require('../../imgs/gl2.jpg'),
                    name:'隔离栅',
                    http: '',
                    id: 'gl2'
                },
                {
                    imgsUrl:require('../../imgs/gl3.jpg'),
                    name:'隔离栅',
                    http: '',
                    id: 'gl3'
                },
                {
                    imgsUrl:require('../../imgs/gl4.jpg'),
                    name:'隔离栅',
                    http: '',
                    id: 'gl4'
                }
            ]
        };
        
    },
	components: {
        "index-header": header
    },
    methods: {
    handleback: function() {
       history.go(-1)
    }
   
  }
}
</script>
<style scoped>
    .pro-content ul, li {
        list-style:none
    }
    .pro-content{
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
    .pro {
        width: 1200px;
        margin: 20px 0 0 20px;
    }
    .pro-inf {
        float: left;
        width: 300px;
        height: 300px;
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
    .ban-img {
        width: 280px;
        height: 250px;
    }
</style>
