<template>
    <div>
        <div class="header">
            <div class="header-left">
                <div class="header-logo">
                    <img src="../../imgs/logo.gif" class="logo" />
                </div>
                <div class="header-name">
                    永腾·恒德
                </div>
            </div>
            <div class="header-right">
                <div class="com-name">安平正基丝网制造有限公司</div>
                <div class="com-ad"> 安平县正基丝网制造有限公司是一家声屏障的专业生产型企业,公司设备齐全，技术先进，具备大批量生产的能力。主要生产声屏障、波形护栏板、防风网...</div>
            </div>
            <div class="header-phone1">
                <div class="phone-num1">联系电话:15127851145</div>
                <div class="phone-name1">（孟经理）</div>   
            </div>
        </div>
    </div>
</template>

<script>
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
    }
  }
</script>
<style scoped>
    .header {
    width: 100%;
    height: 180px;
    margin: 0 auto;
    background: url(../../imgs/bj3.png) no-repeat 100% 100%;
    background-color: #ccc;
    background-size: 100% 100%;
}
.header-left {
    float: left;
    width: 20%;
    height: 180px;
}
.header-logo {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    /* margin-left: 20px; */
    margin: 20px 10px 10px 85px; 
    background-color: #fff;
}
.header-name {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: red;
    font-size: 20px;
    font-weight: 900;
}
.header-left .logo {
    width: 60px;
    height: 60px;
    /* margin-top: 10px; */
}
.header-right {
    float: left;
    width: 60%;
}
.header-right .com-name {
    width: 100%;
    height: 80px;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
    font-weight: 800;
}
.header-right .com-ad {
    width: 100%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
}
.header-phone1 {
    float: left;
    width: 19%;
    height: 180px;
    /* line-height: 300px; */
    text-align: right;
    font-size: 20px;
    color: #000;
    margin-right: 1%;
    font-weight: 900;
}
.phone-num1 {
    width: 100%;
    height: 30px;
    margin-top: 110px;
}
.phone-name1 {
    width: 100%;
    height: 30px;
    text-align: center;
}

</style>
