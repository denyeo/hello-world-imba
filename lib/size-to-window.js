/*
 * size to window:
 * for width sizing, percentages already work correctly,
 * e.g. an element's width can be set to 50% in css and it will be correct
 * however, percentage sizing for heights do not work, setting an element to have
 * height 50% in css will have no effect, because its parent needs to have a height specified
 * for it to work. This is often not practical, as we do not want to fix the document height
 *
 * size to window fixes this by manually calculating the actual window height, so elements
 * can be sized according to the actual window height
 *
 * how to use:
 * 1. add the class "size-to-window" to the element you want to size
 * 2. add the class "max-height-(value)" to the element, value should match the percentage value you want
 * 3. e.g. max-height-90 will set an element's max height to 90% of the window height
 */
function update_all_size_to_window_elements() {
    var available_height = parseInt($(window).height())
    $(".size-to-window").each(function(){
        var class_list = $(this).attr("class").split(/\s+/);
        var max_height_identifier = "max-height-";
        var height_identifier = "height-";
        var size_identifier_found = false;
        for(var i = 0; i < class_list.length; i++) {
            var class_name = class_list[i];
            if(class_name.starts_with(max_height_identifier)) {
                var height_percentage = parseInt(class_name.substr(max_height_identifier.length));
                var height_in_pixels = (height_percentage / 100) * available_height
                $(this).css("max-height", height_in_pixels + "px")
                size_identifier_found = true;
            }
            if(class_name.starts_with(height_identifier)) {
                var height_percentage = parseInt(class_name.substr(height_identifier.length));
                var height_in_pixels = (height_percentage / 100) * available_height
                $(this).css("height", height_in_pixels + "px")
                size_identifier_found = true
            }
            if(!size_identifier_found) {
                $(this).css("max-height", "auto")
                $(this).css("height", "auto")
            }
        }
    });
}

$(window).resize(function() {
    update_all_size_to_window_elements();
});

$(document).ready(function(){
    update_all_size_to_window_elements();
})