<template>
    <div>
        <div class="nav-box">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <router-link to="qyjj">
                    <el-menu-item index="1">企业简介</el-menu-item>
                </router-link>
                <router-link to="cpzx">
                    <el-menu-item index="2">产品中心</el-menu-item>
                </router-link>
                <router-link to="xwzx">
                    <el-menu-item index="3">新闻资讯</el-menu-item>
                </router-link>
                <!-- <router-link to=""> -->
                <el-menu-item index="4">常见问题</el-menu-item>
                <!-- </router-link> -->
                <router-link to="cjcm">
                    <el-menu-item index="5">车间场貌</el-menu-item>
                </router-link>
                <router-link to="lxwm">
                    <el-menu-item index="6">联系我们</el-menu-item>
                </router-link>
    
            </el-menu>
        </div>
    
        <div class="line"></div>
    </div>
</template>

<script>
    import header from '../components/header';
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
            "index-header": header
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
