<template>
    <div>
        <index-header></index-header>
        <index-nav></index-nav>
        <index-ban></index-ban>
         <div>
            <div>
            <div class="index-content">
                <index-news></index-news>
                <index-product></index-product>
            </div>
        </div>
        </div>
        <index-footer></index-footer>
    </div>
    
</template>

<script>
    import header from '../components/header';
    import ban from '../components/ban';
    import nav from '../components/nav.vue';
     import news from '../components/news';
     import product from './productSeven';
    import footer from '../components/footer.vue';
export default {
	components: {
        "index-header": header,
        "index-footer": footer,
        "index-ban": ban,
        "index-news": news,
        "index-product": product,
        "index-nav": nav
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
        overflow: hidden;
    }
</style>
