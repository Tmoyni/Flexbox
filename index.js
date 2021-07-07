$(document).ready(function() {
    $(":button").on( "click", function() {
        $(this).parent().children("button").removeClass("selected")
        $(this).addClass("selected")

        //identify property & value and update CSS
        let property = $(this).parent()[0].id;
        let value = $(this)[0].outerText;
        $(".view-container").css(property, value)

        //add style text to "CSS" section
        let css = $(".view-container")[0].attributes.style.textContent
        $(".css-text")[0].innerText = css
    })
});
