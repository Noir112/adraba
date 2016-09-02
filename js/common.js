$(function() {

    $(".section-home-slider").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination: true
    })
    function open(selector,bool) {
        if(bool == true){
            selector.addClass("open");
        }else{
            selector.removeClass("open");

        }
    }
    var toggle = false;
    $(".btn-x").on('click',function(){
        toggle =!toggle;
        open($('.menu'),toggle);

    });

});
