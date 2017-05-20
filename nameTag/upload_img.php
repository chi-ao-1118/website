<?php
  $count = count($_FILES['img_file']['name']);
  echo $count.'<br>';
  for ($i = 0; $i < $count; ++$i) {
      echo $_FILES['img_file']['name'][$i].'<br>';
      echo $_FILES['img_file']['tmp_name'][$i].'<br>';

      if (is_uploaded_file($_FILES['img_file']['tmp_name'][$i])) {
          if (move_uploaded_file($_FILES['img_file']['tmp_name'][$i], 'img/'.$_FILES['img_file']['name'][$i])) {
              chmod('files/'.$_FILES['img_file']['name'][$i], 0644);
              echo $_FILES['img_file']['name'][$i].'をアップロードしました。<br>';
          } else {
              echo 'ファイルをアップロードできません。<br>';
          }
      } else {
          echo 'ファイルが選択されていません。<br>';
      }
  }
?>
