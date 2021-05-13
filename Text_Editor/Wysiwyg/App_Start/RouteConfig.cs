using System.Web.Mvc;
using System.Web.Routing;

namespace Wysiwyg
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Wysiwyg", id = UrlParameter.Optional }
            );
        }
    }
}
