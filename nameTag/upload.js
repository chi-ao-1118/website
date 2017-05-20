function list_file_upload() {
    // フォームデータを取得
    var formdata = new FormData($('#list_form').get(0));

    // POSTでアップロード
    $.ajax({
            url: "upload.php",
            type: "POST",
            data: formdata,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "html"
        })
        .done(function(data, textStatus, jqXHR) {
            alert(data);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            alert("fail");
        });
}


function img_file_upload() {
    // フォームデータを取得
    var formdata = new FormData($('#img_form').get(0));

    // POSTでアップロード
    $.ajax({
        url  : "upload_img.php",
        type : "POST",
        data : formdata,
        cache       : false,
        contentType : false,
        processData : false,
        dataType    : "html"
    })
    .done(function(data, textStatus, jqXHR){
        alert(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        alert("fail");
    });
}
