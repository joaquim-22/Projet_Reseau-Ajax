$(function() {
    $(".button-login").on('click', function(){

        let valid = true;
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        if($("#floatingInput").val() == "") {
            $("#floatingInput").addClass(".border border-danger");
            $("#errorMessage1").fadeIn().removeClass("d-none");
            valid = false;
        }

        else if(!$("#floatingInput").val().match(testEmail)) {
            $("#floatingInput").addClass(".border border-danger");
            $("#errorMessage1").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#floatingInput").removeClass(".border border-danger");
            $("#errorMessage1").fadeOut().addClass("d-none");
        }

        if($("#floatingPassword").val() == ""){
            $("#floatingPassword").addClass(".border border-danger");
            $("#errorMessage2").fadeIn().removeClass("d-none");
            valid = false;
        }

        else if(!$("#floatingPassword").val().match(/^[a-z0-9]{6,}$/i)) {
            $("#floatingPassword").addClass(".border border-danger");
            $("#errorMessage2").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#floatingPassword").removeClass(".border border-danger");
            $("#errorMessage2").fadeOut().addClass("d-none");
        }
        return valid;
    });
});