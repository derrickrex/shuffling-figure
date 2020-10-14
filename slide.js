//声明$选择功能
var $ = document.querySelectorAll.bind(document)
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
	}, 3000)
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
	runTimer()
}
