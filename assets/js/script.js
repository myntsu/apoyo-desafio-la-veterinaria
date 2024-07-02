$(document).ready(function() {
    $("#form-send").click(function(event) {
        event.preventDefault();
        alert("¡Formulario enviado!");
    });    

    $("#gato-expand").click(function() {
        var link = $(this).attr("src");
        $("modalImage").attr("src", link);
        $("imageModal").fadeIn();
    })

    $("imageModal").click(function() {
        $(this).fadeOut();
    })
});
