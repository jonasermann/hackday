using System.Text.Json.Serialization;

namespace HorizonCalculator;

public class Calculations
{
    public double Radius { get; set; }

    public double ObserverHeight { get; set; }

    public double HorizonDirectDistance
    {
        get { return Math.Sqrt(Math.Pow(ObserverHeight, 2) + 2 * ObserverHeight * Radius); }
    }

    public double ObserverVerticalDrop 
    {
        get { return ObserverHeight * Radius / (ObserverHeight + Radius); }
    }

    public double ObserverHorizontalDrop
    {
        get { return ObserverVerticalDrop * Math.Sqrt(1 + (2 * Radius / ObserverHeight)); }
    }

    public double ObserverAngle
    {
        get { return Math.Asin(ObserverHorizontalDrop / Radius); }
    }

    public double HorizonGeographicalDistance
    {
        get { return Radius * ObserverAngle; }
    }
}
