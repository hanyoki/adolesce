<template>
	<view>
		<video id="myVideo" class="myVideo" :src="videoSrc" v-show="isPlayVideo" :show-fullscreen-btn="showFullscreenBtn" :direction="videoDirection" :show-play-btn="showPlayBtn" @pause="videoPause" @fullscreenchange="viderFullscreen">
			<cover-image class="stopPlayVideoBtn" @click="stopPlayVideo" src="/static/img/close.png"></cover-image>
		</video>
		<view class="content">
			
			<view class="label">
				<view v-for="(label,index) in labelList" :class="{'on':index==labelIndex}" @tap="loadRatings(index)" :key="label.type">
					{{label.name}}({{label.number}})
				</view>
			</view>
			<view class="list">
				<view class="row" v-for="(row,Rindex) in ratingsList" :key="Rindex">
					<view class="left">
						<view class="face">
							<image :src="row.face"></image>
						</view>
					</view>
					<view class="right">
						<view class="name-date">
							<view class="username">
								{{row.username}}
							</view>
							<view class="date">
								{{row.date}}
							</view>
						</view>
						<view class="spec">
							{{row.spec}}
						</view>
						<view class="first">
							<view class="rat">
								{{row.first.content}}
							</view>
							<view class="img-video">
								<view class="box" v-for="item in row.first.video" @tap="playVideo(item.path)" :key="item.path">
									<image mode="aspectFill" :src="item.img"></image>
									<view class="playbtn">
										<view class="icon bofang"></view>
									</view>
								</view>
								<view class="box" v-for="item in row.first.img" @tap="showBigImg(item,row.first.img)" :key="item">
									<image mode="aspectFill" :src="item"></image>
								</view>
							</view>
						</view>
						<view class="append" v-if="row.append">
							<view class="date">
								{{row.append.date}}天后追加
							</view>
							<view class="rat">
								{{row.append.content}}
							</view>
							<view class="img-video">
								<view class="box" v-for="item in row.append.video" @tap="playVideo(item.path)" :key="item.path">
									<image mode="aspectFill" :src="item.img"></image>
									<view class="playbtn">
										<view class="icon bofang"></view>
									</view>
								</view>
								<view class="box" v-for="item in row.append.img" @tap="showBigImg(item,row.append.img)" :key="item">
									<image mode="aspectFill" :src="item"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList:[
					{name:'全部',number:25,type:'all'},
					{name:'好评',number:23,type:'good'},
					{name:'中评',number:1,type:'secondary'},
					{name:'差评',number:1,type:'poor'},
					{name:'有图',number:12,type:'img'},
					{name:'视频',number:2,type:'video'},
					{name:'追加',number:2,type:'append'}
				],
				labelIndex:0,
				ratingsList:[
					{id:1,username:"大黑哥",face:"/static/img/face.jpg",date:'2019-04-21',spec:"规格: XL",grade:"good",
						first:{content:"好看，可以，不愧是专业的，才拿到手上就研究了半天才装上",
						img:["https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg","https://ae01.alicdn.com/kf/HTB1sL7hTjDpK1RjSZFrq6y78VXaw.jpg","https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],
						video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]
						},
						append:{date:65,content:"用了一段时间，质量很好，体验很流畅，推荐购买",
						img:["https://ae01.alicdn.com/kf/HTB1dKZtTgHqK1RjSZFEq6AGMXXaS.jpg","https://ae01.alicdn.com/kf/HTB18h3oTmzqK1RjSZFjq6zlCFXap.jpg"],
						video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4"}]
						}
					},
					{id:2,username:"小黑狗",face:"/static/img/face.jpg",date:'2019-04-21',spec:"规格: XL",grade:"secondary",
						first:{content:"好评，看图",
						img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],
						video:[]
						}
					},
					{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:'2019-04-21',spec:"规格: XL",grade:"poor",
						first:{content:"好评，看图",
						img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],
						video:[]
						}
					},
					{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:'2019-04-21',spec:"规格: XL",grade:"secondary",
						first:{content:"系统默认好评",
						img:[],
						video:[]
						}
					}
				],
				videoDirection:0,
				showFullscreenBtn:true,
				showPlayBtn:true,
				isPlayVideo:true,
				videoSrc:''

			};
		},
		onReady: function (res) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showToast({ title: '触发上拉加载' });
		},
		methods: {
			loadRatings(index){
				this.labelIndex = index;
				uni.showToast({
					title:"切换评论列表"
				})
				//实际应用中，请求对应类型的评论列表，覆盖this.ratingsList
				/*
				let type = this.labelList[index].type; // 评论类型
				......
				*/
			},
			playVideo(path) {
				this.videoSrc = path;
				// this.isPlayVideo = true;
				this.$nextTick(function() {
					this.videoContext.requestFullScreen({direction:0});
				});
				
			},
			stopPlayVideo(){
				this.videoContext.pause();
			},
			videoPause(){
				// this.isPlayVideo = false;
				this.videoSrc = '';
			}, 
			viderFullscreen(e){
				if(e.detail.fullScreen){
					this.videoContext.play();
				}else{
					this.stopPlayVideo();
				}
			},
			showBigImg(src,srclist){
				uni.previewImage({
					current:src,
					urls: srclist
				});
			}
		},
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}

.myVideo{
	position: fixed;
	top: 50%;
	right: 100%;
}
.content{
	view{
		display: flex;
	}
	width: 94%;
	padding: 0 3%;
	
	.label{
		width: 100%;
		flex-wrap:wrap;
		view{
			padding: 0 20upx;
			height: 50upx;
			border-radius: 40upx;
			border:solid 1upx #ddd;
			align-items: center;
			color: #555;
			font-size: 26upx;
			background-color: #f9f9f9;
			margin: 10upx 20upx 10upx 0;
			&.on{
				border:solid 1upx #f06c7a;
				color: #f06c7a;
			}
		}
	}
	.list{
		width: 100%;
		flex-wrap: wrap;
		padding: 20upx 0;
		.row{
			width: 100%;
			margin-top: 30upx;
			.left{
				width: 10vw;
				flex-shrink: 0;
				margin-right: 10upx;
				.face{
					width: 100%;
					image{
						width: 10vw;
						height: 10vw;
						border-radius: 100%;
					}
					
				}
			}
			.right{
				width: 100%;
				flex-wrap: wrap;
				.name-date{
					width: 100%;
					justify-content: space-between;
					align-items: baseline;
					.username{
						font-size: 32upx;
						color: #555;
					}
					.date{
						font-size:28upx;
						color: #aaa;
					}
				}
				.spec{
					width: 100%;
					color: #aaa;
					font-size: 26upx;
				}
				.first{
					width: 100%;
					flex-wrap: wrap;
					.rat{
						font-size: 30upx;
					}
					.img-video{
						width: 100%;
						flex-wrap: wrap;
						.box{
							width: calc((84.6vw - 50upx)/4);
							height: calc((84.6vw - 50upx)/4);
							margin: 5upx 5upx;
							position: relative;
							justify-content: center;
							align-items: center;
							image{
								position: absolute;
								width: 100%;
								height: 100%;
								border-radius: 10upx;
							}
							.playbtn{
								position: absolute;
								.icon{
									font-size: 80upx;
									color: rgba(255,255,255,.9)
								}
							}
						}
					}
				}
				
				.append{
					width: 100%;
					flex-wrap: wrap;
					.date{
						width: 100%;
						height: 40upx;
						border-left: 10upx solid #f06c7a;
						padding-left: 10upx;
						align-items: center;
						font-size: 32upx;
						margin: 20upx 0;
					}
					.rat{
						font-size: 30upx;
					}
					.img-video{
						width: 100%;
						flex-wrap: wrap;
						.box{
							width: calc((84.6vw - 10upx - (10upx * 4))/4);
							height: calc((84.6vw - 10upx - (10upx * 4))/4);
							margin: 5upx 5upx;
							position: relative;
							justify-content: center;
							align-items: center;
							image{
								position: absolute;
								width: 100%;
								height: 100%;
								border-radius: 10upx;
							}
							.playbtn{
								position: absolute;
								.icon{
									font-size: 80upx;
									color: rgba(255,255,255,.9);
								}
							}
						}
					}
				}
			}
		}
	}
}
/*
* <view class="list">
				<view class="row">

					<view class="right">
						
						<view class="spec">
							规格：XL
						</view>
						<view class="first">
							<view class="rat">
								好看，可以，不愧是专业的，才拿到手上就研究了半天才装上
							</view>
							<view class="img-video">
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
									<view class="playbtn">
										<view class="icon bofang"></view>
									</view>
								</view>
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
							</view>
						</view>
						<view class="append">
							<view class="date">
								65天后追加
							</view>
							<view class="rat">
								好看，可以，不愧是专业的，才拿到手上就研究了半天才装上
							</view>
							<view class="img-video">
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			* 
			* */
</style>
