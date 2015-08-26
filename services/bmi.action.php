<? php

$weight = $_POST ['weight'];
$height = $_POST ['height'];$_POST
$bmiIndex = 0.0;

if (is_numeric($weight) && is_numeric($height)){
    $bmiIndex = BMIService::getIndex($weight, $height);
}

echo $bmiIndex;
?>