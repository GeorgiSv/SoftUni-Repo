namespace Tests
{
    using CarManager;
    using NUnit.Framework;
    using System;

    public class CarTests
    {                                               //90/100
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void ConstructorShouldInitilizeCorrectly()
        {
            var car = new Car("Ford", "Fiesta", 5.4, 40);

            Assert.AreEqual("Ford", car.Make);
            Assert.AreEqual("Fiesta", car.Model);
            Assert.AreEqual(5.4, car.FuelConsumption);
            Assert.AreEqual(40, car.FuelCapacity);
        } 

        [Test]
        public void ConstructorShouldInitilizeCorrectlyFuelAmount()
        {
            var car = new Car("Ford", "Fiesta", 5.4, 40);

            Assert.AreEqual(0, car.FuelAmount);
        }

        [TestCase("", "Fiesta", 5.4, 40)]
        [TestCase("Ford", "", 5.4, 40)]
        [TestCase("Ford", "Fiesta", -25, 40)]
        [TestCase("Ford", "Fiesta", 5.4, -40)]
        public void ConstructorShouldThrowArgumentExceptionWhenVauleIsInvalid
            (string make, string model, double fuelConsumption, double fuelCapacity)
        {
            Assert.Throws<ArgumentException>
                (() => new Car(make, model, fuelConsumption, fuelCapacity));
        }

        [Test]
        public void RefuelMethodShouldIncreaseFuelCorrectyl()
        {
            var car = new Car("Ford", "Fiesta", 5.4, 40);

            car.Refuel(20);

            var expectedResult = 20;
            var actualResult = car.FuelAmount;

            Assert.AreEqual(expectedResult, actualResult);
        }

       [Test]
        public void RefuelMethodShouldNotOverflow()
        {
            var car = new Car("Ford", "Fiesta", 5.4, 40);

            car.Refuel(50);

            var expectedResult = 40;
            var actualResult = car.FuelAmount;

            Assert.AreEqual(expectedResult, actualResult);
        }

        [Test]
        public void RefuelMethodShouldThrowArgumentExceptionWhenValueIsNegativeNumber()
        {
            var car = new Car("Ford", "Fiesta", 5.4, 40);

            Assert.Throws<ArgumentException>
                ((() => car.Refuel(-20)));
        }

        [Test]
        public void DriveMethodShouldDecreaseFuelAmountCorrectly()
        {
            var car = new Car("Ford", "Fiesta", 1.0, 40);

            car.Refuel(10);
            car.Drive(20);

            var expectedResult = 9.8;
            var actualResult = car.FuelAmount;

            Assert.AreEqual(expectedResult, actualResult);
        }

        [Test]
        public void DriveMethodShouldThrowInvalidOperationExceptionWhenFuelAmountIsNotEnough()
        {
            var car = new Car("Ford", "Fiesta", 5.4, 40);

            car.Refuel(10);

            Assert.Throws<InvalidOperationException>
                (() => car.Drive(200));
        }
        [Test]
        public void FuelAmountShouldThrowArgumentExceptionIfIsSetToNegativeNumber()
        {
            var car = new Car("Ford", "Fiesta", 1.0, 40);

            Assert.That(car.FuelAmount >= 0);
        }
    }
}