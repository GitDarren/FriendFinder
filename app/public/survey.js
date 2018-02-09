

$(document).ready(function()   {
    console.log("Jquery file is working");
    $("#submitform").on("click", function()   {
        console.log($("#namefield").val(), "you clicked the button");

    $.ajax({
        type: "POST",
        url: '/save',
        data: {name: $("#namefield").val()  },
        success: function(respondFromBackend ) {
            console.log("We got some back", respondFromBackend);
        }
    });

    });
})



