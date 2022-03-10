using System.Threading.Tasks;

namespace DealerPolicy.Developer
{
  public interface IDependentService
  {
    Task<string> GetValueAsync();
  }
}
