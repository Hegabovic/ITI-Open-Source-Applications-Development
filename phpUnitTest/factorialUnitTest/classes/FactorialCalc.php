<?php

namespace App;

class FactorialCalc
{

    public function __construct()
    {
    }

    function factorial($number): ?int
    {
        $result = 1;

        if ($number === 0 || $number === 1) {
            return 1;
        }

        if ($number < 0 || !is_integer($number)) {
            return null;
        }
        return $result = $number * $this->factorial($number - 1);
    }
}