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
            <h2 class="content-qyjj">非金属高铁路基声屏障介绍</h2>
            <div class="content-p">
                <p>非金属高铁路基声屏障简介：目前国内出产高铁路基声屏障方法简直悉数都是：首要出产吸声层，然后等吸声层养护成型以后再复合一层隔声层，这样出产出来的商品，二者不能完全粘合，一年左右复合层的接触面开裂，商品作废，因为高铁的运转速度是350公里/小时，商品开裂作废后在高速铁路的两头构成无穷的安全隐患。 公司技能部自个研制的高速铁路路基声屏障出产线能够出产出100米长，宽度、厚度、随意改动。并且是一次成型，确保了隔声层和吸声层的完美联系，长期使用不开裂，长度依据需求使用高速切开机切开，切面平坦润滑。 咱们的所有商品悉数选用非金属资料研制而成，通过国家建筑资料测试中心检查，悉数契合TB/T3122-2005、GB6566-2001、GB/T50081-2002、通环（2009）8326的技能需求，到达防火A级，质量轻，吸音、隔音作用好，强度高，外形漂亮，并且能挑选颜色，依据不一样设计院设计的长度，宽度，厚度能够随意改动</p>
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
