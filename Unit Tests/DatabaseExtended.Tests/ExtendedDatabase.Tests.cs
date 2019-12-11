namespace ExtendedDatabase.Tests
{
    using NUnit.Framework;
    using System;

    public class ExtendedDatabaseTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void ConstructorShouldSetArrayCorrectyl()
        {
            //Arrange
            Person[] persons = new Person[]
            {
                  new Person(970808, "Gosho"),
                  new Person(987887, "Drago"),
                  new Person(987123, "Pepi") ,
            };

            var dataBase = new ExtendedDatabase(persons);

            //Action
            var expectedCoun = 3;
            var actualCount = dataBase.Count;

            //Assert
            Assert.AreEqual(expectedCoun, actualCount);
        }
        [Test]
        public void ConstructorShouldThrwoArgumentExceptionWhenArrayIsWithMoreThan16Elements()
        {
            //Arrange
            var persons = new Person[17];

            Assert.Throws<ArgumentException>
                (() => new ExtendedDatabase(persons));
        }

        [Test]
        public void AddShouldIncreaseCountOfTheArray()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
            };
            var dataBase = new ExtendedDatabase(persons);
            var personThree = new Person(987123, "Pepi");

            dataBase.Add(personThree);

            var expectedResult = 3;
            var actualResult = dataBase.Count;

            Assert.AreEqual(expectedResult, actualResult);
        }

        [Test]
        public void AddShouldAddCorrectlyElement()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
            };
            var dataBase = new ExtendedDatabase(persons);
            var personThree = new Person(987123, "Pepi");

            dataBase.Add(personThree);

            var actualResult = dataBase.FindByUsername("Pepi");
            var expectedResult = personThree;

            Assert.AreEqual(expectedResult, actualResult);
        }

        [Test]
        public void AddShouldThrowInvalidOperationExceptionWhenElementsAreAlready16()
        {
            Person[] persons = new Person[]
            {
                  new Person(970808, "Gosho"),
                  new Person(987887, "Drago"),
                  new Person(987123, "Pepi") ,
                  new Person(123123, "asd") ,
                  new Person(234252, "agasf") ,
                  new Person(666666, "asdasf") ,
                  new Person(555544, "etdhsdt") ,
                  new Person(222222, "fghdxftg") ,
                  new Person(333333, "cvbcvb") ,
                  new Person(444444, "dtuhkmhbj") ,
                  new Person(555555, "sdfsdf") ,
                  new Person(777777, "wsxedc") ,
                  new Person(888888, "aqwedswe") ,
                  new Person(999999, "vbnnmm") ,
                  new Person(686868, "qweewq") ,
                  new Person(424242, "yretrt") ,
            };

            var dataBase = new ExtendedDatabase(persons);

            Assert.Throws<InvalidOperationException>
                (() => dataBase.Add(new Person(424299, "Sasheto")));
        }

        [TestCase(000000, "Gosho")]
        [TestCase(970808, "Ivan")]
        public void AddShouldThrowInvalidOperationExceptionWhenElementParamAlreadyExist(long Id, string username)
        {
            Person[] persons = new Person[]
            {
                  new Person(970808, "Gosho"),
                  new Person(987887, "Drago"),
                  new Person(987123, "Pepi") ,
            };

            var dataBase = new ExtendedDatabase(persons);

            Assert.Throws<InvalidOperationException>
                (() => dataBase.Add(new Person(Id, username)));
        }
        [Test]
        public void RemoveShouldDecreaseCountOfTheArray()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
               new Person(987123, "Pepi") ,
            };
            var dataBase = new ExtendedDatabase(persons);

            dataBase.Remove();

            var expectedResult = 2;
            var actualResult = dataBase.Count;

            Assert.AreEqual(expectedResult, actualResult);
        }
        [Test]
        public void FindByNameShouldWorkCorrectly()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
               new Person(987123, "Pepi") ,
            };
            var dataBase = new ExtendedDatabase(persons);

            var expectedResult = "Gosho";
            var actualResult = dataBase.FindByUsername("Gosho");

            Assert.AreEqual(expectedResult, actualResult.UserName);
        }

        [Test]
        public void FindByNameShouldThrowInvalidOperationExceptionWhenTheGivenNameIsNotPresented()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
               new Person(987123, "Pepi") ,
            };
            var dataBase = new ExtendedDatabase(persons);

            Assert.Throws<InvalidOperationException>
                (() => dataBase.FindByUsername("Bate Sasho"));
        }

        [Test]
        public void FindByNameShouldThrowArgumentNullExceptionIfGivenNameIsNull()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
               new Person(987123, "Pepi") ,
            };
            var dataBase = new ExtendedDatabase(persons);

            Assert.Throws<ArgumentNullException>
                (() => dataBase.FindByUsername(null));
        }
        [Test]
        public void FindByIdShouldWorkCorrectly()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
               new Person(987123, "Pepi") ,
            };
            var dataBase = new ExtendedDatabase(persons);

            var expectedResult = 970808;
            var actualResult = dataBase.FindById(970808);

            Assert.AreEqual(expectedResult, actualResult.Id);
        }

        [Test]
        public void FindByIdShouldThrowInvalidOperationExceptionWhenTheGivenIdIsNotPresented()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
               new Person(987123, "Pepi") ,
            };
            var dataBase = new ExtendedDatabase(persons);

            Assert.Throws<InvalidOperationException>
                (() => dataBase.FindById(987889));
        }

        [Test]
        public void FindByIdShouldThrowArgumentNullExceptionIfGivenIdIsBelow0()
        {
            Person[] persons = new Person[]
            {
               new Person(970808, "Gosho"),
               new Person(987887, "Drago"),
               new Person(987123, "Pepi") ,
            };
            var dataBase = new ExtendedDatabase(persons);

            var number = -9708080809;
            Assert.Throws<ArgumentOutOfRangeException>
                (() => dataBase.FindById(number));
        }
    }
}