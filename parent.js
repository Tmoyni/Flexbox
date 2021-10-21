$(document).ready(function() {
    let topAxisText = $(".top-axis")
    let sideAxisText = $(".side-axis")

    $(":button").on( "click", function() {
        //identify property & value and update CSS
        let property = $(this).parent()[0].id;
        let value = $(this)[0].outerText;

        //checks if button has already been selected
        if ($(".view-container-items")[0].attributes.style && $(".view-container-items")[0].attributes.style.textContent.includes(`${property}: ${value}`)) {
            // If yes: unselect button and remove that property value
            $(".view-container-items").css(property,"")
            $(this).removeClass("selected")
        } else {
            // If no: select button and add that property value
            $(this).parent().children("button").removeClass("selected")
            $(this).addClass("selected")
            $(".view-container-items").css(property, value)
        }

        let css = $(".view-container-items")[0].attributes.style.textContent

        // Updates Axis labels
        if ($(".view-container-items")[0].style.cssText.includes("row")) {
            topAxisText[0].innerText = "Main Axis"
            sideAxisText[0].innerText = "Cross Axis"
        } else {
            topAxisText[0].innerText = "Cross Axis"
            sideAxisText[0].innerText = "Main Axis"
        }

        //add style text to "CSS" section
        $(".css-text")[0].innerText = css
    })
});
