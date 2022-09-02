using Microsoft.AspNetCore.Mvc;

namespace HorizonCalculator.Controllers;

[ApiController]
[Route("Calculator")]
public class HorizonCalculatorController : ControllerBase
{
    [HttpPost]
    public Calculations Get([FromBody] CalculationInfo calculationInfo)
    {
        return new Calculations
        {
            Radius = calculationInfo.Radius,
            ObserverHeight = calculationInfo.ObserverHeight
        };
    }
}
