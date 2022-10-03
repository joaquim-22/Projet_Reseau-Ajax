$(function() {
    $(".buttonSubmit").on('click', function(){

        let valid = true;
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        //Tester Nom Utilisateur

        if($("#inputTextUtilisateur").val() == "") {
            $("#inputTextUtilisateur").addClass(".border border-danger");
            $("#messageError1").fadeIn().removeClass("d-none");
            valid = false;
        }

        else if(!$("#inputTextUtilisateur").val().match(/^[a-zA-Z0-9.]+$/)) {
            $("#inputTextUtilisateur").addClass(".border border-danger");
            $("#messageError1").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#inputTextUtilisateur").removeClass(".border border-danger");
            $("#messageError1").fadeOut().addClass("d-none");
        }

        //Tester Nom

        if($("#inputTextNom").val() == "") {
            $("#inputTextNom").addClass(".border border-danger");
            $("#messageError3").fadeIn().removeClass("d-none");
            valid = false;
        }

        else if(!$("#inputTextNom").val().match(/^[a-zA-Z\s]+$/)) {
            $("#inputTextNom").addClass(".border border-danger");
            $("#messageError3").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#inputTextNom").removeClass(".border border-danger");
            $("#messageError3").fadeOut().addClass("d-none");
        }

        //Tester Prénom

        if($("#inputTextPrenom").val() == "") {
            $("#inputTextPrenom").addClass(".border border-danger");
            $("#messageError4").fadeIn().removeClass("d-none");
            valid = false;
        }

        else if(!$("#inputTextPrenom").val().match(/^[a-zA-Z\s]+$/)) {
            $("#inputTextPrenom").addClass(".border border-danger");
            $("#messageError4").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#inputTextPrenom").removeClass(".border border-danger");
            $("#messageError4").fadeOut().addClass("d-none");
        }

        //Tester Date

        let val_date = $('#inputDate').val();
        let seperator = val_date.split('/');

        if(!isNaN(seperator[0]) || !isNaN(seperator[1]) || !isNaN(seperator[2])) {
            $("#inputDate").addClass(".border border-danger");
            $("#messageError2").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#inputDate").removeClass(".border border-danger");
            $("#messageError2").fadeOut().addClass("d-none");
        }

        //Tester Email

        if($("#inputEmail").val() == "") {
            $("#inputEmail").addClass(".border border-danger");
            $("#messageError5").fadeIn().removeClass("d-none");
            valid = false;
        }

        else if(!$("#inputEmail").val().match(testEmail)) {
            $("#inputEmail").addClass(".border border-danger");
            $("#messageError5").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#inputEmail").removeClass(".border border-danger");
            $("#messageError5").fadeOut().addClass("d-none");
        }

        //Tester Password

        if($("#inputPassword").val() == ""){
            $("#inputPassword").addClass(".border border-danger");
            $("#messageError6").fadeIn().removeClass("d-none");
            valid = false;
        }

        else if(!$("#inputPassword").val().match(/^[a-z0-9]{6,}$/i)) {
            $("#inputPassword").addClass(".border border-danger");
            $("#messageError6").fadeIn().removeClass("d-none");
            valid = false;
        }

        else {
            $("#inputPassword").removeClass(".border border-danger");
            $("#messageError6").fadeOut().addClass("d-none");
        }
        return valid;
    });
});