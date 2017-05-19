<?php
// 一時アップロード先ファイルパス
$file_tmp = $_FILES['listFile']['tmp_name'];

// 正式保存先ファイルパス
$file_save = './memberlist.csv';

// ファイル移動
$result = @move_uploaded_file($file_tmp, $file_save);
if ($result === true) {
    echo 'アップロードに成功しました';
} else {
    echo 'アップロードに失敗しました';
}
