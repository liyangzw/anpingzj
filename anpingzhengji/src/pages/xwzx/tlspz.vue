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
            <h2 class="content-qyjj">铁路声屏障，高度在1m一5m间</h2>
            <div class="content-p">
                <p>铁路声屏障声屏障:依据声屏障运用环境，声屏障分为交通隔音屏障、设备噪音衰减隔音屏障、工业厂界隔音屏障。室外的声屏障通常选用砖或混凝土构造，室内的声屏障引证钢板、木板、PMMA/POLYCARBONATE SHEET塑料扳、石膏板和泡沫铝等构造。2.5米宽PC板以由无锡正成公司研制成功。大大改进透光作用，增强耐碰击性！！耐弱酸和中性油。有用运用期达20年之久。</p>
                <p>声屏障首要由钢构造立柱和吸隔声屏板两部分构成，立柱是声屏障的首要受力构件，它经过螺栓或焊接固定在道路防撞墙或轨道边的预埋钢板上；吸隔声板是首要的隔声吸声构件，它经过高强绷簧卡子将其固定在H型立柱槽内，构成声屏障。声屏障的规划已较为充分地考虑了高架高速道路、城市轻轨、地铁的风载、交通车辆的碰击安全和全天候的露天防腐疑问。它外形美观大方，制造精美，运送、安装便利，造价低，运用寿命长，特别适用于高架高速道路和城市轻轨、地铁的防噪声运用，是现代化城市最理想的隔声降噪设备。</p>
                <p>铁路声屏障，高度在1m一5m间，覆盖有用区域平均降噪达10～15dB(A)(125Hz～40000Hz，1／3倍频程)，最高达20dB(A)。通常来讲，声屏障越高，或离声屏障越远，降噪作用就越好</p>
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
