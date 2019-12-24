namespace BlueOrigin.Tests
{
    using System;
    using NUnit.Framework;

    public class SpaceshipTests
    {
       [Test]
        public void Name_ShouldSetValueCorrectly()
        {
            //aragen
            var spaceShip = new Spaceship("Bardaka", 3);
            //action
            var actualResult = spaceShip.Name;

            //assert
            Assert.AreEqual("Bardaka", actualResult);
        }

        [Test]
        public void Name_ShouldTHrowArgumentExceptionIfIsNullOrEmpty()
        {
           Assert.Throws<ArgumentNullException>(() => new Spaceship("", 3));
        }

        [Test]
        public void Capacity_ShouldSetCorrectly()
        {
            //aragen
            var spaceShip = new Spaceship("Bardaka", 3);
            //action
            var actualResult = spaceShip.Capacity;

            //assert
            Assert.AreEqual(3, actualResult);
        }
        [Test]
        public void Capacity_ShouldTHrowArgumentExceptionWhenIsBelowZero()
        {
            var actualResult = Assert.Throws<ArgumentException>(() => new Spaceship("Bardaka", -5));

            //assert
            Assert.AreEqual("Invalid capacity!", actualResult.Message);
        }

        [Test]
        public void Add_ShouldAddCorrectly()
        {
            //aragen
            var spaceShip = new Spaceship("Bardaka", 3);
            var astronaut = new Astronaut("GErgi", 50);

            spaceShip.Add(astronaut);

            //assert
            Assert.AreEqual(1, spaceShip.Count);
        }

        [Test]
        public void Add_ShouldTHrowInvalidOperationExceprionWHenIsFull()
        {
            //aragen
            var spaceShip = new Spaceship("Bardaka", 1);
            var astronaut = new Astronaut("GErgi", 50);
            var astronaut2 = new Astronaut("MArtin", 20);

            spaceShip.Add(astronaut);

            var actualResult = Assert.Throws<InvalidOperationException>
                (() => spaceShip.Add(astronaut2));

            //assert
            Assert.AreEqual("Spaceship is full!", actualResult.Message);
        }

        [Test]
        public void Add_ShouldTHrowInvalidOperationExceprionWHenAstronautAlreadyExist()
        {
            var spaceShip = new Spaceship("Bardaka", 5);
            var astronaut = new Astronaut("GErgi", 50);

            spaceShip.Add(astronaut);

            var actualResult = Assert.Throws<InvalidOperationException>
                (() => spaceShip.Add(astronaut));

            Assert.AreEqual($"Astronaut {astronaut.Name} is already in!", actualResult.Message);
        }

        [Test]
        public void Remove_ShouldRemoveCOrrectlyAndReturnIfIsSuccesfull()
        {
            var spaceShip = new Spaceship("Bardaka", 5);
            var astronaut = new Astronaut("GErgi", 50);

            spaceShip.Add(astronaut);

            Assert.True(spaceShip.Remove("GErgi"));
        }

        [Test]
        public void Remove_ShouldNotRemoveCOrrectlyAndReturnIfIsSuccesfull()
        {
            var spaceShip = new Spaceship("Bardaka", 5);
            var astronaut = new Astronaut("GErgi", 50);

            spaceShip.Add(astronaut);

            Assert.False(spaceShip.Remove("Pepkata"));
        }
    }
}