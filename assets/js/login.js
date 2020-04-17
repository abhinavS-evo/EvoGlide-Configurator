$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        window.location = $("#loginsuccess").attr('href');
    });

    $("#role").change(function(){
        setDashboard();
    });
    setDashboard();
});

function setDashboard(){
    if($("#role").val()==='global'){
        $("#loginsuccess").attr('href','global.html');
    }else{
        $("#loginsuccess").attr('href','instance.html');
    }
}