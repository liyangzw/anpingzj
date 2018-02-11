<template>
    <div class="content">
        <index-header></index-header>
        <index-nav></index-nav>
        <index-ban></index-ban>
        <div>
            <div class="index-content">
                <index-news></index-news>
                <index-product></index-product>
            </div>
        </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import header from '../components/header';
    import ban from '../components/ban';
    import product from './product';
    import nav from '../components/nav.vue';
    import news from '../components/news';
    import footer from '../components/footer';
    export default {
        data() {
            return {
                cjcm: [{
                        imgsUrl: require('../../imgs/c1.jpg')
                    },
                    {
                        imgsUrl: require('../../imgs/c2.jpg')
                    },
                    {
                        imgsUrl: require('../../imgs/c3.jpg')
                    },
                    {
                        imgsUrl: require('../../imgs/c4.jpg')
                    },
                    {
                        imgsUrl: require('../../imgs/c5.jpg')
                    },
                    {
                        imgsUrl: require('../../imgs/c6.jpg')
                    },
                    {
                        imgsUrl: require('../../imgs/c7.jpg')
                    }
                ]
            };
    
        },
        components: {
            "index-header": header,
            "index-footer": footer,
            "index-ban": ban,
            "index-nav": nav,
            "index-news": news,
            "index-product": product
        }
    }
</script>

<style scoped>
    .content {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
    
    .breadcrumb {
        width: 100%;
        height: 40px;
        background: #ccc;
    }
    
    .crumb {
        float: left;
        margin: 0 10px;
        line-height: 40px;
    }
    
    .content-cjcm {
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 36px;
        border-bottom: 1px dashed #ccc;
        margin-bottom: 5px;
    }
    
    .index-content {
        width: 94%;
        height: 1400px;
        margin: 0 auto;
        margin-top: 40px;
    }
    
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
