using NUnit.Framework;
using System;
using Database;

namespace Tests
{
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
            var database = new Database.Database(arrayOfIntegers);

            //Action
            var count = database.Count;
            var expectedCount = 16;

            //Assert
            Assert.AreEqual(expectedCount, count);
        }
        [Test]
        public void ConstructroShouldThrowInvalidOperationExceptionWhenElementsAreBiggerThanSixteen()
        {
            //Arange
            var arrayOfIntegers = new int[17];

            //Action
            //Assert
            Assert.Throws<InvalidOperationException>
                (() => new Database.Database(arrayOfIntegers));
        }
        [Test]
        public void AddOperationShouldThrowInvalidOperationExceptionWhenArrayIsFull()
        {
            var arrayOfIntegers = new int[16];
            var database = new Database.Database(arrayOfIntegers);
            int elementForAdd = 10;

            Assert.Throws<InvalidOperationException>
                (() => database.Add(elementForAdd));
        }
        public void AddOperationShouldAddElementAtTheNextFreeCell()
        {
            var arrayOfIntegers = new int[16];
            var database = new Database.Database(arrayOfIntegers);

            int countBefire = database.Count;

            database.Add(10);

            int countAfter = database.Count;


            Assert.That(countBefire < countAfter);
        }
    }
}
//•	Remove operation, should support only removing an element at the last index(just like a stack)
//          o If you try to remove element from empty Database, InvalidOperationException is thrown.
//•	Constructors should take integers only, and store them in array.
//•	Fetch method should return the elements as array.
