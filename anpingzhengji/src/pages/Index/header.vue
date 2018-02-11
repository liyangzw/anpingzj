<template>
    <div>
        <index-header></index-header>
        <index-nav></index-nav>
       
        <div class="line"></div>
    </div>
</template>

<script>
    import header from '../components/header';
    import nav from '../components/nav.vue';
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            "index-header": header,
            "index-nav": nav
        }
    }
</script>

<style scoped>
    .nav-box {
        width: 100%;
        height: 60px;
        background: #324157;
    }
    
    .el-menu-demo {
        width: 95%;
        margin: 0 auto;
        height: 60px;
    }
</style>
