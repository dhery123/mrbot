<?php 

$command = escapeshellcmd('python3 FacebookPoster.py');
$output = shell_exec($command);
echo $output;

?>