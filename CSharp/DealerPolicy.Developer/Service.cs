using System.Threading.Tasks;

namespace DealerPolicy.Developer
{
  public class Service
  {
    private readonly IDependentService _dependentService;

    public Service(IDependentService dependentService)
    {
      _dependentService = dependentService;
    }

    public async Task<bool> MyMethodAsync(string value)
    {
      if (value == null)
      {
        value = await _dependentService.GetValueAsync().ConfigureAwait(false);
      }

      return value != null;
    }
  }
}
