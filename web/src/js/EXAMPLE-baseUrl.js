const baseUrl = {
    // Base url for routes. This is left blank for development. But looking at the url, 
    // whatever is in between the domain and the react routes - 
    // example http://rsgis-webqa.campusad.msu.edu/Enviroweather/commodites 
    // we would want, route: "/Enviroweather"
    route: "",
    // Base url for things like images or possible other assests.
    // This is left as public in most cases.
    path:"/public",
    // Base url for the api. We want the entire url of the api
    // Different for everyone in most cases
    api:"http://api.enviroweather.com/api"
};
export default baseUrl;