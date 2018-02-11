<template>
	<div class="content">
        <index-header></index-header>
        <div class="breadcrumb">
            <div class="crumb"><a href="http://localhost:8080/#/">首页</a></div>
            <div class="crumb"><i class="el-icon-arrow-right"></i></div>
            <div class="crumb"><a href="http://localhost:8080/#/xwzx">新闻资讯</a></div>
            <div class="crumb"><i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="content-bot">
            <h2 class="content-qyjj">声屏障降噪截止频率</h2>
            <div class="content-p">
                <p>声屏障板功能的学技术指标首要有声衰减量、声屏障的均匀吸声系数和隔声量、声屏障降噪截止频率。</p>
                <p>1、声衰减量：也即是刺进丢失，其计算方法为，噪声量-受印象点的噪声量。例如：高架桥的车速一般在80km/h，在路旁边一米处噪声为80—85dB(A)之间，居民受影响点的噪声一般为68—75dB(A)之间。因而，本声屏障建成后的刺进丢失为10dB(A)以上。</p>
                <p>2、声屏障的均匀吸声系数和隔声量 </p>
                <p>（1）、声屏障的均匀吸声系数A≥0.5；声屏障的全吸声构件的吸声系数a≥0.90。均匀吸声系数A=a1s1+a2s2+……其间a1、a2….，为声屏障的吸声有些，反射有些和其他有些的吸声系数，s1、s2….为对应有些的面积。</p>
                <p>（2）、声屏障的吸声构件的隔声量△L≥30dB(A)；反射透明胶片的隔声△L≥32dB(A)。</p>
                <p>（3）、吸声构件的填充多孔资料的容重为48kg/m3。</p>
                <p>3、声屏障降噪截止频率F=250Hz</p>
                <p>声屏障板包含屏障体的力学功能、声学功能、构造需求、构件外表处理、土建、资料、等多方面的需求，施工触及土建、构件的制作和现场装置等内容。可以说，公路声屏障缔造工程具有“小而全”的特色。隔声屏障隔声效果好，可将高噪声设备围隔，做到闹静分隔。声屏障板具有外形漂亮、坚固耐用、装置方便、观景效果与环境和谐等特色，适用于交通噪声、工地施工噪声及大型工业设备的噪声阻隔</p>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../components/header';

export default {
	components: {
		"index-header": header
	}
}
</script>
<style scoped>
   .content {
       width: 1220px;
       margin: 0 auto;
       height: auto;
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
   .content-p {
       margin-top: 20px;
   }
   .content p{
        font-size: 16px;
        text-indent: 2em;
        line-height: 24px;
        margin-top: 10px;
   }
</style>
