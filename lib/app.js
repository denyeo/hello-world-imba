(function(){
	var canvasimg, markercontainer, self = this, t0, marker;
	var points = [{top: '50%',left: '50%'},{top: '25%',left: '75%'}];
	var imgtag = ti$('div','canvas').setContent([
		canvasimg = t$('img').flag('canvasimg').flag('size-to-window').flag('max-height-70').setSrc("img/interior-01.jpg").end(),
		(markercontainer = t$('div').flag('marker-container').setContent((function(t0) {
			for (var i = 0, len = points.length, res = []; i < len; i++) {
				res.push((marker = t$('div').flag('marker').setContent(t$('img').setSrc("img/marker.png").end(),2).end()).css(points[i]));
			};
			return res;
		})(t0),0).end()).css({height: canvasimg.dom().height,width: canvasimg.dom().width})
	],0).end();
	
	return q$$('body').append(imgtag);

})()