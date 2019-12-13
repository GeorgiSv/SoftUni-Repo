using NUnit.Framework;
using System;

namespace TheRace.Tests
{
    public class RaceEntryTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Add_ShouldCorrectlyAddElement()
        {
            //Arange
            var raceEntry = new RaceEntry();
            var unitMotor = new UnitMotorcycle("Ducati", 80, 1200);
            var unitRider = new UnitRider("Paco", unitMotor);

            //Action
            var result = raceEntry.AddRider(unitRider);

            //Asser
            Assert.AreEqual("Rider Paco added in race.", result);
            Assert.AreEqual(1, raceEntry.Counter);
        }

        [Test]
        public void Add_ShouldThrowInvalidOperationExceptionWhenIsNull()
        {
            var raceEntry = new RaceEntry();

            var result =  Assert.Throws<InvalidOperationException>(() => raceEntry.AddRider(null));

            Assert.AreEqual("Rider cannot be null.", result.Message);
        }

        [Test]
        public void Add_ShouldThrowInvalidOperationExceptionWhenAlreadyExist()
        {
            var raceEntry = new RaceEntry();
            var unitMotor = new UnitMotorcycle("Ducati", 80, 1200);
            var unitRider = new UnitRider("Paco", unitMotor);
            var unitRider2 = new UnitRider("Paco", unitMotor);

            raceEntry.AddRider(unitRider);

            var result = Assert.Throws<InvalidOperationException>(() => raceEntry.AddRider(unitRider2));

            Assert.AreEqual("Rider Paco is already added.", result.Message);
        }
        [Test]
        public void Calculeate_ShouldCauclulateCorrectly()
        {
            var raceEntry = new RaceEntry();
            var unitMotor = new UnitMotorcycle("Ducati", 80, 1200);
            var unitMotor2 = new UnitMotorcycle("Ducati", 100, 1200);

            var unitRider = new UnitRider("Paco", unitMotor);
            var unitRider2 = new UnitRider("Gosho", unitMotor2);

            raceEntry.AddRider(unitRider);
            raceEntry.AddRider(unitRider2);

            //Action
            var result = raceEntry.CalculateAverageHorsePower();

            Assert.AreEqual(90, result);
        }

        [Test]
        public void Calculeate_ShouldThrowInvalidOperationExceptionWhenParticipantsAreNotEnough()
        {
            var raceEntry = new RaceEntry();
            var unitMotor = new UnitMotorcycle("Ducati", 80, 1200);
            var unitRider = new UnitRider("Paco", unitMotor);

            raceEntry.AddRider(unitRider);

            var result = Assert.Throws<InvalidOperationException>(() => raceEntry.CalculateAverageHorsePower());

            Assert.AreEqual("The race cannot start with less than 2 participants.", result.Message);
        }
    }
}