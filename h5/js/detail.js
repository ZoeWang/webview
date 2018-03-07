var detail = {
	card: $("#goodsCard"),			// 商品详情卡片
	selectMask: $("#selMask"),		// 卡片遮罩
	type: 'card',					// 购买类型 购物车 立即
	num: 1,				// 商品数量
	color: '',			// 商品颜色
	size: '',			// 商品尺码
	price: parseInt($("#price").text()),	//商品价格
	init: function() {
		var _this = this;
		$("#addCart").on('click', {type: 'card'}, _this.showCard);   // 添加购物车
		$("#buyNow").on('click', {type: 'buy'}, _this.showCard);		// 立即购买
		$("#closeCard").on('click', _this.closeCard);					// 关闭卡片

		_this.goodsPlus();	//加 商品
		_this.goodsMinus();  //减 商品
		$("#goodsSure").on('click', _this.goodsConfirm);		// 商品添加到购物车

		_this.getColor();	//选择颜色
		_this.getSize();	//选择尺码

	},
	closeCard: function(e) {
		detail.selectMask.css('display','none');
		detail.card.removeClass("show").addClass("hide");
	},
	showCard: function(e) {
		detail.type = e.data.type;
		
		detail.selectMask.css('display','block');
		detail.card.removeClass("hide").addClass("show");
	},
	// 确定商品 弹出框
	goodsConfirm: function(e) {
		detail.closeCard();

		var data = {
			'price': detail.price,
			'color': detail.color,
			'size': detail.size,
			'num': detail.num,
			'type': detail.type
		}
		console.log("data",data);
		if(detail.type == 'card') {
			console.log("加入购物车");
			layer.msg('添加购物车成功');
		} else {
			// 跳转页面
			console.log("立即购买");
		}

	},

	// 添加数量
	goodsPlus: function(e) {
		var _this = this;
		var currNum = $("#currNum");
		$("#plusNum").on('click', function() {
			var n = currNum.html();
			_this.num = parseInt(n)+1;
			if(_this.num == 0) {
				// $(this).attr('disabled','disabled');
				return
			}
			currNum.html(_this.num);

		});
	},
	// 减少数量
	goodsMinus: function(e) {
		var _this = this;
		var currNum = $("#currNum");
		$("#minusNum").on('click', function() {
			var n = currNum.html();
			_this.num = parseInt(n)-1;
			if(_this.num == 0) {
				// $(this).attr('disabled','disabled');
				return
			}
			currNum.html(_this.num);
		});
	},

	// 选择颜色
	getColor: function() {
		var _this = this;
		$("#getColor>div").on('click', function() {
			_this.color = $(this).html();
			$(this).addClass("active").siblings().removeClass("active");
		});
	},
	// 选择尺码
	getSize: function() {
		var _this = this;
		$("#getSize>div").on('click', function() {
			_this.size = $(this).html();
			$(this).addClass("active").siblings().removeClass("active");
		});
	}
	// loading 加载前
}

$(function() {
	detail.init();
});