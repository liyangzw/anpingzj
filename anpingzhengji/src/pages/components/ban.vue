<template>
    <el-carousel :interval="5000" arrow="always" class="ban_box">
        <el-carousel-item v-for="(item, index) in imgitems" :key="'item_' + index" class="ban_box">
            <img :src="item.imgsUrl" alt=""  class="ban-img"/>
            <!-- <img src="../../imgs/f10.jpg" alt=""> -->
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data() {
            return {
                imgitems:[
                    {
                        imgsUrl:require('../../img/b1.jpg')
                    },
                    {
                        imgsUrl:require('../../img/b2.jpg')
                    },
                    {
                        imgsUrl:require('../../img/b4.jpg')
                    }
                ]
            };
            
        },
        methods: {
            
        }
  }
</script>
<style scoped>
    
    .ban_box {
        height: 400px;
    }
    .ban-img {
        width: 100%;
        height: 100%;
    }
</style>
