//1.0基础轮播及左右按钮点击切换
//声明$选择功能
var $ = document.querySelectorAll.bind(document)
//动态设置下方按钮居中
$('.box-dian')[0].style.left = ($('.box')[0].offsetWidth - 25 * $('.button').length) / 2 + 'px'
var index = 0
var timer
//将整个定时器包装
function runTimer() {
	timer = setInterval(function() {
		index++
		if (index == $('.box-img').length) { //判断放在index++后面，先执行，在判断
			index = 0
		}
		control()
		changeColor()
	}, 3000)
}
// 将按钮颜色随图片改变包装
function changeColor() {
	for (let i = 0; i < $('.button').length; i++) {
		$('.button')[i].style.background = '#ccc'
	}
	$('.button')[index].style.background = 'red' //以上四行：button的颜色随着图片改变
}

function control() {
	for (var i = 0; i < $('.box-img').length; i++) {
		$('.box-img')[i].style.zIndex = 0
		$('.box-img')[i].style.opacity = 0
	}
	$('.box-img')[index].style.zIndex = 10
	$('.box-img')[index].style.opacity = 1
}
//自动轮播
runTimer()
//左按钮事件
$('.box-left')[0].onclick = function() {
	clearInterval(timer)
	index--
	if (index < 0) {
		index = $('.box-img').length - 1
	}
	control()
	changeColor()
	runTimer()
}
//右按钮事件
$('.box-right')[0].onclick = function() {
	clearInterval(timer)
	index++
	if (index > $('.box-img').length - 1) {
		index = 0
	}
	control()
	changeColor()
	runTimer()
}
// 所有按钮移入移出循环
for (var i = 0; i < $('.button').length; i++) {
	$('.button')[i].setAttribute('setIndex', i) //设置每个按钮的索引值
	//移入按钮停止定时器并且显示相应图片
	$('.button')[i].onmouseover = function() {
		clearInterval(timer)
		index = this.getAttribute('setIndex') //按钮的索引i赋予图片的索引
		control()
		changeColor()
	}
	//移出按钮启动定时器
	$('.button')[i].onmouseout = function() {
		clearInterval(timer)
		control()
		changeColor()
		runTimer()
	}
}
