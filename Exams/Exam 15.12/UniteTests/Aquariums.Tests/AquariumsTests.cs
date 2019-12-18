namespace Aquariums.Tests
{
    using System;
    using NUnit.Framework;

    public class AquariumsTests
    {
        [Test]
        public void Name_ShouldBeSetCorrectly()
        {
            //Arrange
            var aquarium = new Aquarium("Jaz", 5);
            //Assert
            Assert.AreEqual("Jaz", aquarium.Name);
        }
        [Test]
        public void Name_ShouldThrowArgumentNullExceptionWhenIsNull()
        {
            //Assert
            Assert.Throws<ArgumentNullException>
                (() => new Aquarium(null, 5));
        }
        //----
        [Test]
        public void Capacity_ShouldBeSetCorrectly()
        {
            //Arrange
            var aquarium = new Aquarium("Jaz", 5);
            //Assert
            Assert.AreEqual(5, aquarium.Capacity);
        }
        [Test]
        public void Capacity_ShouldThrowArgumentExceptionWhenIsNull()
        {
            //Assert
           var actualResult =  Assert.Throws<ArgumentException>
                (() => new Aquarium("JAz", -5));

            Assert.AreEqual("Invalid aquarium capacity!", actualResult.Message);
        }
        //---

        //----
        [Test]
        public void Add_ShouldAddCorrectly()
        {
            //Arrange
            var aquarium = new Aquarium("Jaz", 5);
            var fish = new Fish("Nemo");

            aquarium.Add(fish);

            //Assert
            Assert.AreEqual(1, aquarium.Count);
        }

        [Test]
        public void Add_ShouldThrowInvalidOperationExceptionWhenIsFull()
        {
            //Arrange
            var aquarium = new Aquarium("Jaz", 1);
            var fish = new Fish("Nemo");
            aquarium.Add(fish);

            var fish1 = new Fish("Gaco");

            var actualResult = Assert.Throws<InvalidOperationException>(() => aquarium.Add(fish1));

            //Assert
            Assert.AreEqual("Aquarium is full!", actualResult.Message);
        }
        //---
        [Test]
        public void Remove_ShouldAddCorrectly()
        {
            //Arrange
            var aquarium = new Aquarium("Jaz", 5);
            var fish = new Fish("Nemo");
            var fish1 = new Fish("Gosho");

            aquarium.Add(fish);
            aquarium.Add(fish1);

            aquarium.RemoveFish("Gosho");

            //Assert
            Assert.AreEqual(1, aquarium.Count);
        }

        [Test]
        public void Remove_ShouldThrowInvalidOperationExceptionWhenFishIsNotFound()
        {
            //Arrange
            var aquarium = new Aquarium("Jaz", 5);
            var fish = new Fish("Nemo");

            var actualResult = Assert.Throws<InvalidOperationException>(() => aquarium.RemoveFish("Pepi"));

            //Assert
            Assert.AreEqual("Fish with the name Pepi doesn't exist!", actualResult.Message);
        }
        //--
        [Test]
        public void SellFish_SHouldReturnFishCorrectly()
        {
            var aquarium = new Aquarium("Jaz", 5);
            var fish = new Fish("Nemo");

            aquarium.Add(fish);

            var actualResult = aquarium.SellFish("Nemo");

            Assert.AreEqual(fish.Name, actualResult.Name);
        }
        [Test]
        public void SellFish_SHouldThrowInvalidOperationExceptionWHenIsNtoFound()
        {
            var aquarium = new Aquarium("Jaz", 5);
            var fish = new Fish("Nemo");

            aquarium.Add(fish);

            var actualResult = Assert.Throws<InvalidOperationException>(() => aquarium.SellFish("Gaci"));

            Assert.AreEqual($"Fish with the name Gaci doesn't exist!", actualResult.Message);
        }

        [Test]
        public void SellFish_ShouldSetAvaiabilityToFalse()
        {
            var aquarium = new Aquarium("Jaz", 5);
            var fish = new Fish("Nemo");

            aquarium.Add(fish);

            var actualResult = aquarium.SellFish("Nemo");

            Assert.False(actualResult.Available);
        }

        //--

        [Test]
        public void Report_ShouldReturnstringCorrectly()
        {
            var aquarium = new Aquarium("Jaz", 5);
            var fish = new Fish("Nemo");

            aquarium.Add(fish);
            var actualResult = aquarium.Report();

            Assert.AreEqual($"Fish available at Jaz: Nemo", actualResult);
        }
    }
}
