namespace Database.Tests
{
    using NUnit.Framework;
    using System;
    using System.Collections;

    [TestFixture]
    public class DatabaseTests
    {
        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public void ConstructroShouldBeInitializedWithSixteenElements()
        {
            //Arange
            var arrayOfIntegers = new int[16];
            var database = new Database(arrayOfIntegers);

            //Action
            var actualCount = database.Count;
            var expectedCount = 16;

            //Assert
            Assert.AreEqual(expectedCount, actualCount);
        }
        [Test]
        public void ConstructroShouldThrowInvalidOperationExceptionWhenElementsAreBiggerThanSixteen()
        {
            //Arange
            var arrayOfIntegers = new int[17];
            //Action
            //Assert
            Assert.Throws<InvalidOperationException>
                (() => new Database(arrayOfIntegers));
        }
        [Test]
        public void AddOperationShouldThrowInvalidOperationExceptionWhenArrayIsFull()
        {
            var arrayOfIntegers = new int[16];
            var database = new Database(arrayOfIntegers);
            int elementForAdd = 10;

            Assert.Throws<InvalidOperationException>
                (() => database.Add(elementForAdd));
        }
        [Test]
        public void AddOperationShouldAddElementAtTheNextFreeCell()
        {
            int[] arrayOfIntegers = {1, 2, 3, 4};
            var database = new Database(arrayOfIntegers);

            int expectedNumber = 10;
            database.Add(expectedNumber);

            var actualNumber = database.Fetch()[4];

            Assert.AreEqual(expectedNumber, actualNumber);
        }
        [Test]
        public void AddOperationShouldAddIncreaseCountOFCollection()
        {
            int[] arrayOfIntegers = { 1, 2, 3, 4 };
            var database = new Database(arrayOfIntegers);

            int expectedCount = 5;
            database.Add(6);

            var actualCount = database.Fetch().Length;

            Assert.AreEqual(expectedCount, actualCount);
        }
        [Test]
        public void RemoveShouldRemoveOnlyLastElement()
        {
            int[] arrayOfIntegers = { 1, 2, 3, 4 };
            var database = new Database(arrayOfIntegers);

            int expectedNumber = 3;
            database.Remove();

            var actualNumber = database.Fetch()[2];

            Assert.AreEqual(expectedNumber, actualNumber);

        }

        [Test]
        public void RemoveShouldDecreaseTreCount()
        {
            int[] arrayOfIntegers = { 1, 2, 3, 4 };
            var database = new Database(arrayOfIntegers);

            int expectedNumber = 3;
            database.Remove();

            var actualNumber = database.Fetch().Length;

            Assert.AreEqual(expectedNumber, actualNumber);
        }
        public void RemoveShouldTHrowInvalidOperationExceptionWhenArrayIsEmpty()
        {
            int[] arrayOfIntegers = new int[0];
            var database = new Database(arrayOfIntegers);

            Assert.Throws<InvalidOperationException>
                (() => database.Remove());
        }
        [Test]
        public void FetchShouldReturnELementsAsArray()
        {
            int[] arrayOfIntegers = { 1, 2, 3, 4 };
            var database = new Database(arrayOfIntegers);

            int[] expected = { 1, 2, 3, 4 };
            int[] actual = database.Fetch();

            Assert.AreEqual(expected, actual);
        }
    }
}
