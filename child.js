$(document).ready(function() {

    $(":button").on( "click", function() {
        $(this).parent().children("button").removeClass("selected")
        $(this).addClass("selected")

        //identify property & value and update CSS
        let property = $(this).parent()[0].id;
        let value = $(this)[0].outerText;
        $(".child").css(property, value)

        //add style text to "CSS" section
        let css = $(".child")[0].attributes.style.textContent
        // update css field at bottom of page
        $(".css-text")[0].innerText = css
        // update css in child element
        $(".target-child")[0].innerText = css
    })

});
