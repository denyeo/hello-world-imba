var points = [ {top: '50%', left: '50%'}, {top: '25%', left: '75%'} ]
# Imba.Events.register 'mouseup'

tag #imgtag
    def recalc
        @imgheight = $$(.canvasimg).dom:height
        @imgwidth = $$(.canvasimg).dom:width
        render

    def createmarker evt
        var xPos = 100 * evt.event:offsetX / evt.target.dom:offsetWidth
        var yPos = 100 * evt.event:offsetY / evt.target.dom:offsetHeight
        console.log "{xPos}, {yPos}"
        points.push({left: "{xPos}%", top: "{yPos}%"})
        render

    def deletemarker point
        points = points.filter(|p| p != point)
        render

    def render
        # @imgheight = $$(.canvasimg).dom:height
        # @imgwidth = $$(.canvasimg).dom:width
        <self>
            (var canvas = <div.canvas>
                (var canvasimg = <img.canvasimg.size-to-window.max-height-70 src="img/interior-01.jpg">)
                @imgheight = canvasimg.dom:height
                @imgwidth = canvasimg.dom:width
                (var markercontainer = <div.marker-container>
                    for point in points
                        (var marker = <div.marker>
                            <img src="img/marker.png">
                        ).css(point)
                ).css({height: @imgheight, width: @imgwidth})
            ).css({height: @imgheight, width: @imgwidth})
            # canvas:onclick = do |evt| createmarker
            <div>
                for point in points
                    <div>
                        <br>
                        <span> "Marker: {point:top}, {point:left}"
                        <button :tap=['deletemarker', point]> "Delete"

$$(body).append(#imgtag)
$$(.canvasimg).dom:onload = do |evt|
    #imgtag.render
window:onresize = do #imgtag.render