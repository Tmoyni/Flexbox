$(document).ready(function() {
    // let topAxisText = $(".top-axis")
    // let sideAxisText = $(".side-axis")
    $(":button").on( "click", function() {
        $(this).parent().children("button").removeClass("selected")
        $(this).addClass("selected")

        //identify property & value and update CSS
        let property = $(this).parent()[0].id;
        let value = $(this)[0].outerText;
        $(".child").css(property, value)
        console.log("property, value", property, value)

        // Updates Axis labels
        // if ($(".view-container-items")[0].style.cssText.includes("row")) {
        //     topAxisText[0].innerText = "Main Axis"
        //     sideAxisText[0].innerText = "Cross Axis"
        // } else {
        //     topAxisText[0].innerText = "Cross Axis"
        //     sideAxisText[0].innerText = "Main Axis"
        // }

        //add style text to "CSS" section
        let css = $(".child")[0].attributes.style.textContent
        $(".css-text")[0].innerText = css
    })
});
