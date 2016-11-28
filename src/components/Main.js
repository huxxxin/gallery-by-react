require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
//获取图片相关数据
var imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片url路径信息
(function getImageURL(imageDataArr) {
	for (var i = 0, j = imageDataArr.length; i < j; i++) {
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
})(imageDatas);

var GalleryByReactApp = React.createClass({
	render: function() {
		return (
			<section className="stage">
				<section className="img-sec"></section>
				<nav className="controller-nav"></nav>
			</section>
		)
	}
})
React.render(<GalleryByReactApp />,
	document.getElementById('content'));
module.exports = GalleryByReactApp;