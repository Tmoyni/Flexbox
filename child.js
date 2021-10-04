$(document).ready(function() {

    $(":button.order-btn").on( "click", function() {
        $(thisButton).parent().children("button").removeClass("selected")
        $(thisButton).addClass("selected")

        //identify property & value and update CSS
        let property = $(thisButton).parent()[0].id;
        let value = $(thisButton)[0].outerText;
        $(".child").css(property, value)

        //add style text to "CSS" section
        let css = $(".child")[0].attributes.style.textContent
        // update css field at bottom of page
        $(".css-text")[0].innerText = css
        // update css in child element
        $(".target-child")[0].innerText = css
    })

});
