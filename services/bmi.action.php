<? php

$weight = $_POST ['weight'];
$height = $_POST ['height'];$_POST
$bmiIndex = 0.0;

if (is_double($weight) && is_double($height)){
    $bmiIndex = BMIService::getIndex($weight, $height);
}

echo $bmiIndex;
?>