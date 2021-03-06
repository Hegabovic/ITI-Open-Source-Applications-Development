<?php

use PHPUnit\Framework\TestCase;

//require_once ("vendor/autoload.php");

class FactorialClacTest extends TestCase
{
    private static \App\FactorialCalc $factorialCalc;

    public static function setUpBeforeClass(): void
    {
        self::$factorialCalc = new \App\FactorialCalc();

        parent::setUpBeforeClass(); // TODO: Change the autogenerated stub
    }

    // (1)
    function test_value_of_factorial_of_zero()
    {
        $this->assertTrue(
            self::$factorialCalc->factorial(0) == 1
        );
    }

    // (2)
    function test_value_of_factorial_of_one()
    {
        $this->assertTrue(
            self::$factorialCalc->factorial(1) == 1
        );
    }

    // (3)
    function test_value_of_factorial_of_5()
    {
        $this->assertTrue(
            self::$factorialCalc->factorial(5) == 120
        );
    }

    // (4)
    function test_value_of_factorial_of_random_plus()
    {
        $n = rand(3,50);
        $this->assertTrue(
            self::$factorialCalc->factorial($n) == self::$factorialCalc->factorial($n-1) * ($n)
        );
    }

    // (5)
    function test_value_of_factorial_of_negative_number()
    {
        $this->assertTrue(
            self::$factorialCalc->factorial(-3) == null
        );
    }

    // (6)
    function test_value_of_factorial_of_friction_number()
    {
        $this->assertTrue(
            self::$factorialCalc->factorial(1.5) == null
        );
    }

    // (7)
    function test_value_of_factorial_of_false()
    {
        $this->assertTrue(
            self::$factorialCalc->factorial(false) == null
        );
    }

    // (8)
    function test_value_of_factorial_of_string()
    {
        $this->assertTrue(
            self::$factorialCalc->factorial('abc') == null
        );
    }
}