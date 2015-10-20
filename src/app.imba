var points = [ {top: '50%', left: '50%'}, {top: '25%', left: '75%'} ]
var imgtag = <div#canvas>
    (var canvasimg = <img.canvasimg.size-to-window.max-height-70 src="img/interior-01.jpg">)
    (var markercontainer = <div.marker-container>
        for point in points
            (var marker = <div.marker>
                <img src="img/marker.png">
            ).css(point)
    ).css({height: canvasimg.dom():height, width: canvasimg.dom():width})

$$(body).append imgtag