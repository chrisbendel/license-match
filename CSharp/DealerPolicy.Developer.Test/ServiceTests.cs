using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace DealerPolicy.Developer.Test
{
  [TestClass]
  public class ServiceTests
  {
    [TestMethod]
    public async Task MyMethodReturnsTrueIfAValueIsProvided()
    {
      // Given
      var mockDependentService = new Mock<IDependentService>();
      mockDependentService.Setup(m => m.GetValueAsync()).Returns(Task.FromResult("value"));

      var service = new Service(mockDependentService.Object);

      // When
      var result = await service.MyMethodAsync(null).ConfigureAwait(false);

      // Then
      Assert.IsTrue(result);
    }
  }
}
