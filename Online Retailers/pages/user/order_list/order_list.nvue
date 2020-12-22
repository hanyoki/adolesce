<template>
	<div>
		<div class="tabs">
			<div class="tab">
				<text v-for="(tab, tbIndex) in orderType" :key="tbIndex" 
					@click="showType(tbIndex)" 
					class="tab-text" 
					:class="[tbIndex == selectIndex ? 'tab-text-on' : '']"
				>{{ tab }}</text>
			</div>
			<div class="border" :style="{ transform: 'translateX(' + translateXW + 'px)' }"></div>
		</div>
		<slider class="slider" :auto-play="false" :infinite="false" :index="selectIndex" @change="sliderChange">
			<list class="frame" v-for="(page, index) in orderList" :key="index">
				<cell v-if="page.length == 0">
					<div class="onorder">
						<image class="onorder-image" src="https://ae01.alicdn.com/kf/HTB1FGJ7XED1gK0jSZFG762d3FXam.png"></image>
						<text class="onorder-text">没有相关订单</text>
					</div>
				</cell>
				<cell v-for="(row, rowIndex) in page" :key="rowIndex" v-if="page.length > 0">
					<div class="row">
						<text class="type">{{ typeText[row.type] }}</text>
						<div class="order-info">
							<div class="order-info-left"><image class="left-image" :src="row.img"></image></div>
							<div class="order-info-right">
								<text class="order-info-right-name">{{ row.name }}</text>
								<text class="order-info-right-spec">{{ row.spec }}</text>
								<div class="order-info-right-price-number">
									<text class="order-info-right-unit">￥</text>
									<text class="order-info-right-price">{{ row.price }}</text>
									<text class="order-info-right-multiplier">x</text>
									<text class="order-info-right-number">{{ row.numner }}</text>
								</div>
							</div>
						</div>
						<div class="detail">
							<text class="detail-number">共{{ row.numner }}件商品</text>
							<div class="detail-sum">
								<text class="detail-sum-text">合计￥</text>
								<text class="detail-sum-payment">{{ row.payment }}</text>
								<text class="detail-sum-nominal">(含运费 ￥{{ row.freight }})</text>
							</div>
						</div>
						<div class="btns">
							<div class="btns-div" v-if="row.type == 'unpaid'">
								<text class="btns-btn default" @click="cancelOrder(row)">取消订单</text>
								<text class="btns-btn pay" @click="toPayment(row)">付款</text>
							</div>
							<div class="btns-div" v-if="row.type == 'back'"><text class="btns-btn default" @click="remindDeliver(row)">提醒发货</text></div>
							<div class="btns-div" v-if="row.type == 'unreceived'">
								<text class="btns-btn default" @click="showLogistics(row)">查看物流</text>
								<text class="btns-btn pay">确认收货</text>
								<text class="btns-btn pay">我要退货</text>
							</div>
							<div class="btns-div" v-if="row.type == 'received'">
								<text class="btns-btn default">评价</text>
								<text class="btns-btn default">再次购买</text>
							</div>
							<div class="btns-div" v-if="row.type == 'completed'"><text class="btns-btn default">再次购买</text></div>
							<div class="btns-div" v-if="row.type == 'refunds'"><text class="btns-btn default">查看进度</text></div>
							<div class="btns-div" v-if="row.type == 'cancelled'"><text class="btns-btn default">已取消</text></div>
						</div>
					</div>
				</cell>
			</list>
		</slider>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectIndex: 0,
			translateX: [0, 125, 250, 375, 500, 625, 750],
			translateXW: 0,
			orderType: ['全部', '待付款', '待发货', '待收货', '待评价', '退换货'],
			typeText: {
				unpaid: '等待付款',
				back: '等待商家发货',
				unreceived: '商家已发货',
				received: '等待用户评价',
				completed: '交易已完成',
				refunds: '商品退货处理中',
				cancelled: '订单已取消'
			},
			orderList: [
				[
					{
						type: 'unpaid',
						ordersn: 0,
						goods_id: 0,
						img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168.00',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'unpaid',
						ordersn: 1,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1duHtcfBj_uVjSZFpq6A0SXXaJ.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168.00',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'back',
						ordersn: 2,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168.00',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'unreceived',
						ordersn: 3,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168.00',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'received',
						ordersn: 4,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1JC1fe.CF3KVjSZJnq6znHFXaG.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168.00',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'completed',
						ordersn: 5,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1GSqoeWWs3KVjSZFxq6yWUXXav.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168.00',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'refunds',
						ordersn: 6,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1_Mefe3aH3KVjSZFjq6AFWpXaJ.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'cancelled',
						ordersn: 7,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1Lu1pe8Cw3KVjSZFuq6AAOpXaI.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					}
				],
				[
					{
						type: 'unpaid',
						ordersn: 0,
						goods_id: 0,
						img: 'https://ae01.alicdn.com/kf/HTB1iMife3aH3KVjSZFjq6AFWpXaA.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					},
					{
						type: 'unpaid',
						ordersn: 1,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1D6Sfe4iH3KVjSZPfq6xBiVXaG.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					}
				],
				[
					//无
				],
				[
					{
						type: 'unreceived',
						ordersn: 3,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1IjSfe4iH3KVjSZPfq6xBiVXa4.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					}
				],
				[
					{
						type: 'received',
						ordersn: 4,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					}
				],
				[
					{
						type: 'refunds',
						ordersn: 6,
						goods_id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '168',
						payment: 168.0,
						freight: 12.0,
						spec: '规格:S码',
						numner: 1
					}
				]
			]
		};
	},
	created() {
		this.selectIndex = parseInt(uni.getStorageSync('tbIndex'))+1;
	},
	methods: {
		showType(tbIndex) {
			this.selectIndex = tbIndex;
			this.translateXW = this.translateX[tbIndex];
			console.log('this.selectIndex: ' + this.selectIndex);
		},
		sliderChange(e) {
			this.selectIndex = e.index;
			this.translateXW = this.translateX[e.index];
			console.log('e.index: ' + JSON.stringify(e.index));
		},

		remindDeliver(row) {
			uni.showToast({
				title: '已提醒商家发货'
			});
		},
		cancelOrder(row) {
			uni.showModal({
				title: '取消订单',
				content: '确定取消此订单？',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定');
						this.doCancelOrder(row.ordersn);
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		doCancelOrder(ordersn) {
			let typeNum = this.orderList.length;
			for (let i = 0; i < typeNum; i++) {
				let list = this.orderList[i];
				let orderNum = list.length;
				if (orderNum > 0 && list[0].type == 'unpaid') {
					for (let j = 0; j < orderNum; j++) {
						if (this.orderList[i][j].ordersn == ordersn) {
							this.orderList[i][j].type = 'cancelled';
							break;
						}
					}
				}
			}
		},
		toPayment(row) {
			//本地模拟订单提交UI效果
			uni.showLoading({
				title: '正在获取订单...'
			});
			let paymentOrder = [];
			paymentOrder.push(row);
			setTimeout(() => {
				uni.setStorage({
					key: 'paymentOrder',
					data: paymentOrder,
					success: () => {
						uni.hideLoading();
						uni.navigateTo({
							url: '../../pay/payment/payment?amount=' + row.payment
						});
					}
				});
			}, 500);
		}
	}
};
</script>

<style>
.tabs {
	width: 750px;
	flex-direction: row;
	flex-wrap: wrap;
	height: 80px;
	align-items: center;
	background-color: #f8f8f8;
}

.tab {
	width: 750px;
	height: 76px;
	flex-direction: row;
	flex-wrap: wrap;
}

.tab-text {
	width: 125px;
	height: 76px;
	line-height: 76px;
	text-align: center;
	font-size: 26px;
	color: #444;
}
.tab-text-on {
	color: #f06c7a;
}
.border {
	width: 75px;
	margin: 0 25px;
	height: 4px;
	background-color: #f06c7a;
	transition-property: transform;
	transition-duration: 0.3s;
	transition-delay: 0s;
	transition-timing-function: ease;
}

.slider {
	width: 750px;
	top: 80px;
	bottom: 0;
	background-color: #f3f3f3;
	position: absolute;
}

.frame {
	width: 750px;
	padding: 20px 20px;
}
.onorder {
	width: 750px;
	height: 375px;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	flex-direction: row;
	margin-top: 50px;
}
.onorder-image {
	width: 150;
	height: 150;
	border-radius: 150;
}
.onorder-text {
	width: 750;
	height: 60px;
	font-size: 28px;
	color: #444;
	text-align: center;
	line-height: 60px;
}

.row {
	width: 710px;
	height: 400px;
	padding: 10px 20px;
	border-radius: 10px;
	background-color: #fff;
	margin-top: 20px;
	flex-direction: column;
}

.type {
	width: 710px;
	font-size: 26px;
	color: #ec652f;
	height: 50px;
	text-align: left;
}

.order-info {
	width: 710px;
	height: 188px;
	flex-direction: row;
}

.left {
	flex-shrink: 0;
	width: 188px;
	height: 188px;
}
.left-image {
	width: 188px;
	height: 188px;
	border-radius: 10px;
}

.order-info-right {
	width: 472px;
	height: 188px;
	margin-left: 10px;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
}

.order-info-right-name {
	width: 472px;
	height: 94px;
	font-size: 28px;
	overflow: hidden;
}

.order-info-right-spec {
	color: #a7a7a7;
	font-size: 22px;
}

.order-info-right-price-number {
	position: absolute;
	bottom: 0;
	width: 472px;
	color: #333;
	justify-content: flex-end;
	flex-direction: row;
	align-items: flex-end;
}
.order-info-right-unit,
.order-info-right-multiplier {
	font-size: 20px;
}
.order-info-right-price,
.order-info-right-number {
	font-size: 24px;
}

.detail {
	width: 670px;
	height: 60px;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: row;
}
.detail-number {
	font-size: 26px;
}
.detail-sum {
	padding: 0 8px;
	flex-direction: row;
	align-items: flex-end;
}
.detail-sum-text {
	font-size: 26px;
}
.detail-sum-payment {
	font-size: 30px;
}
.detail-sum-nominal {
	font-size: 26px;
}
.btns {
	width: 670px;
	height: 80px;
	flex-direction: row;
	align-items: center;
}
.btns-div {
	width: 670px;
	height: 50px;
	justify-content: flex-end;
	flex-direction: row;
}
.btns-btn {
	min-width: 120px;
	height: 50px;
	padding: 0 20px;
	border-radius: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 28px;
	margin-left: 20px;
	border-style: solid;
	border-width: 1px;
	border-color: #ccc;
}

.default {
	border-color: #ccc;
	color: #666;
}

.pay {
	border-color: #ec652f;
	color: #ec652f;
}
</style>
