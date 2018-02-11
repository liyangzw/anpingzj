<template>
	<div class="main">
		<index-header></index-header>
		<index-ban></index-ban>
		<div class="index-content">
			<index-news></index-news>
			<index-product></index-product>
		</div>
		<index-about></index-about>
		<index-support></index-support>
		<index-footer></index-footer>
	</div>
</template>

<script>
import header from './header';
import ban from './ban';
import news from '../components/news';
import product from './product';
import indexbout from './about';
import indexsupport from './support';
import footer from '../components/footer';


export default {
	// created: function() {
	//     this.$http.get('./src/json/ban.json').then(response => { 
	// 		  // console.log(response)
	// 		//   this.banImage  = response.body.data.imgUrl
	//     }, response => {
	//         console.log('调错了')
	//     });
    // },
	data () {
        return {
			//  off: false,
			//  banImage: []
     		
        }
    },
	components: {
		"index-header": header,
		"index-ban": ban,
		"index-news": news,
		"index-product": product,
		"index-about":indexbout,
		"index-support": indexsupport,
		"index-footer": footer
	}
}
</script>
<style scoped>
	.main {
		width: 100%;
		height: auto;
		background: #eee;
		
	}
	.index-content {
		width: 94%;
		height: 1100px;
		margin: 0 auto;
		margin-top: 40px;
		overflow: hidden;
		
	}
</style>
