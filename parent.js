$(document).ready(function() {
    let topAxisText = $(".top-axis")
    let sideAxisText = $(".side-axis")
    $(":button").on( "click", function() {
        $(this).parent().children("button").removeClass("selected")
        $(this).addClass("selected")

        //identify property & value and update CSS
        let property = $(this).parent()[0].id;
        let value = $(this)[0].outerText;
        $(".view-container-items").css(property, value)

        // Updates Axis labels
        if ($(".view-container-items")[0].style.cssText.includes("row")) {
            topAxisText[0].innerText = "Main Axis"
            sideAxisText[0].innerText = "Cross Axis"
        } else {
            topAxisText[0].innerText = "Cross Axis"
            sideAxisText[0].innerText = "Main Axis"
        }

        //add style text to "CSS" section
        let css = $(".view-container-items")[0].attributes.style.textContent
        $(".css-text")[0].innerText = css
    })
});
