/**
 * demo.js for mui demo
 * by ZHAO Xudong,zxdong@gmail.com
 */

$(function ($) {
	
	//init ui
	mui.initUI()
	
	//qrcode
	$('#qrcode').qrcode({width: 128,height: 128,text: window.location.href })
})
