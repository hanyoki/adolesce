<template>
	<div class="content">
		<header>
			<div class="header">
				<div class="target" v-for="(target, index) in orderbyList" :key="index" @click="select(index)" :class="[target.selected ? 'target-on' : 'target-on1']">
					<text class="target-text" :class="[target.selected ? 'target-text-on' : '']">{{ target.text }}</text>
					<text v-if="target.orderbyicon" class="target-icon" :class="[target.selected ? 'target-text-on' : '']">{{ target.orderbyicon[target.orderby] }}</text>
				</div>
			</div>
		</header>
		
		<div class="place"></div>
		<waterfall class="goods-list" column-count="2" column-width="auto">
			<refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
				<text class="refresh-indicator-text">{{ refreshText }}</text>
				<loading-indicator class="refresh-indicator"></loading-indicator>
			</refresh>
			<cell v-for="goods in goodsList" :key="goods.goods_id">
				<view class="product" @tap="toGoods(goods)">
					<image class="product-image" mode="widthFix" :src="goods.img"></image>
					<text class="product-name">{{ goods.name }}</text>
					<view class="product-info">
						<text class="product-info-price">{{ goods.price }}</text>
						<text class="product-info-slogan">{{ goods.slogan }}</text>
					</view>
				</view>
			</cell>
			<loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
				<text class="loading-indicator-text">{{loadingText}}</text>
				<loading-indicator class="loading-indicator"></loading-indicator>
			</loading>
		</waterfall>
	</div>
</template>

<script>
export default {
	data() {
		return {
			refreshText: '下拉刷新',
			refreshing: false,
			loadinging: false,
			loadingText:'上拉加载',
			orderbyList: [
				{ text: '销量', selected: true, orderbyicon: false, orderby: 0 },
				{ text: '价格', selected: false, orderbyicon: ['\ue737', '\ue736'], orderby: 0 },
				{ text: '好评', selected: false, orderbyicon: false, orderby: 0 }
			],
			goodsList: [
				{
					goods_id: 0,
					img: 'https://ae01.alicdn.com/kf/HTB1JC1fe.CF3KVjSZJnq6znHFXaG.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 1,
					img: 'https://ae01.alicdn.com/kf/HTB1GSqoeWWs3KVjSZFxq6yWUXXav.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 2,
					img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 3,
					img: 'https://ae01.alicdn.com/kf/HTB1duHtcfBj_uVjSZFpq6A0SXXaJ.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 4,
					img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 5,
					img: 'https://ae01.alicdn.com/kf/HTB1_Mefe3aH3KVjSZFjq6AFWpXaJ.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 6,
					img: 'https://ae01.alicdn.com/kf/HTB1Lu1pe8Cw3KVjSZFuq6AAOpXaI.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 7,
					img: 'https://ae01.alicdn.com/kf/HTB1iMife3aH3KVjSZFjq6AFWpXaA.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 8,
					img: 'https://ae01.alicdn.com/kf/HTB1D6Sfe4iH3KVjSZPfq6xBiVXaG.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 9,
					img: 'https://ae01.alicdn.com/kf/HTB1IjSfe4iH3KVjSZPfq6xBiVXa4.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				}
			]
		};
	},
	beforeCreate() {
		const domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			fontFamily: 'iconfont',
			src: "url('https://at.alicdn.com/t/font_1087442_fe5vigfwr5m.ttf')"
		});
	},
	mounted(){
		// nvue页面下，关闭下拉刷新，用waterfall实现下拉和上拉刷新。
		const currentWebview = getCurrentPages()[getCurrentPages().length - 1].$getAppWebview();
		currentWebview.setStyle({
			pullToRefresh: {
				support: false
			},
		});
		this.init();
	},
	methods: {
		init() {
			this.setTitle();
		},
		setTitle() {
			//设置标题
			let catName = uni.getStorageSync('catName');
			console.log('catName: ' + catName);
			uni.setNavigationBarTitle({
				title: catName
			});
		},
		select(index) {
			let tmpTis = this.orderbyList[index].text + '排序 ';
			if (this.orderbyList[index].orderbyicon) {
				let type = this.orderbyList[index].orderby == 0 ? '升序' : '降序';
				if (this.orderbyList[index].selected) {
					type = this.orderbyList[index].orderby == 0 ? '降序' : '升序';
					this.orderbyList[index].orderby = this.orderbyList[index].orderby == 0 ? 1 : 0;
				}
				tmpTis += type;
			}
			this.orderbyList[index].selected = true;
			let len = this.orderbyList.length;
			for (let i = 0; i < len; i++) {
				if (i != index) {
					this.orderbyList[i].selected = false;
				}
			}
			uni.showToast({ title: tmpTis, icon: 'none' });
		},
		onrefresh(event) {
			this.refreshText = '正在刷新';
			this.refreshing = true;
			setTimeout(() => {
				this.refreshText = '下载刷新';
				this.refreshing = false;
			}, 2000);
		},
		onpullingdown(event) {
			if (event.pullingDistance <= -200) {
				this.refreshText = '放开刷新';
			}
		},
		onloading(event) {
			this.loadinging = true;
			setTimeout(() => {
				let len = this.goodsList.length;
				if(len>=40){
					uni.showToast({title:'没有更多了',icon:'none'});
					this.loadinging = false;
					return false;
				}else{
					this.loadingText="正在加载...";
				}
				let tmpList = JSON.parse(JSON.stringify(this.goodsList));
				let end_goods_id = this.goodsList[len-1].goods_id;
				for(let i=1;i<=10;i++){
					let row = tmpList[i-1];
					row.goods_id = end_goods_id+i;
					this.goodsList.push(row);
				}
				this.loadinging = false;
			}, 1000);
		}
	}
};
</script>

<style>
.content {
	flex-direction: column;
}
.header {
	width: 750px;
	height: 79px;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-end;
	position: fixed;
	z-index: 99;
	background-color: #fff;
	top: 0;
	z-index: 10;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: #eee;
}
.target {
	width: 150px;
	height: 60px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: -2px;
	border-bottom-color: #fff;
}
.target-on {
	border-bottom-width: 4px;
	border-bottom-style: solid;
	border-bottom-color: #f06c7a;
}
.target-text {
	color: #aaa;
	font-size: 30px;
}
.target-text-on,
.target-icon-on {
	color: #555;
	font-weight: 600;
}
.target-icon {
	color: #aaa;
	font-family: iconfont;
}
.place {
	background-color: #ffffff;
	height: 80px;
}
.goods-list {
	width: 750px;
	padding: 0 30px 30px 30px;
	background-color: #ffffff;
}
.product {
	width: 335px;
	border-radius: 20px;
	background-color: #fff;
	margin: 20px 0 0 0;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.product-image {
	width: 335px;
	height: 335px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
}
.product-name {
	width: 335px;
	padding: 10px 13px;
	text-align: center;
	overflow: hidden;
	font-size: 30px;
}
.product-info {
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	width: 335px%;
	padding: 10px 13px;
}
.product-info-price {
	color: #e65339;
	font-size: 30px;
	font-weight: 600;
}
.product-info-slogan {
	color: #807c87;
	font-size: 24px;
}
.refresh {
	width: 690;
	height: 150;
	margin-top: -50;
	align-items: center;
	justify-content: center;
}
.refresh-indicator-text {
	color: #888888;
	font-size: 30px;
	text-align: center;
}
.refresh-indicator {
	height: 60px;
	width: 60px;
	color: #000;
}
.loading {
	width: 690;
	height: 120;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
.loading-indicator-text {
	color: #888888;
	font-size: 30px;
	text-align: center;
}
.loading-indicator {
	height: 60px;
	width: 60px;
	color: #000;
}
</style>
