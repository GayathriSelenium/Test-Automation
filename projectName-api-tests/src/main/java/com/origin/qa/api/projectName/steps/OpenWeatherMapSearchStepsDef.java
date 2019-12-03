package com.origin.qa.api.projectName.steps;

import com.origin.qa.api.projectName.request.SearchRequest;
import com.origin.qa.api.projectName.response.SearchResponse;
import com.origin.qa.api.projectName.utils.ScenarioContext;
import com.origin.qa.framework.utils.Assertions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OpenWeatherMapSearchStepsDef extends BaseStepsDef {
    private SearchRequest searchRequest;

    public OpenWeatherMapSearchStepsDef(ScenarioContext scenarioContext) throws Throwable {
        super(scenarioContext);
        searchRequest = new SearchRequest(scenarioContext);
    }

    @Given("^I build an OpenWeather current weather data request$")
    public void buildOpenWeatherCurrentWeatherDataRequest() {
        // set any default search data here
    }

    @And("^I set the city name to \"([^\"]*)\"$")
    public void setCityName(String cityName) throws Throwable {
        scenarioContext.testData().setCityName(cityName);
        searchRequest.addCityName();
    }

    @And("^I set the country code to \"([^\"]*)\"$")
    public void setCountryCode(String countryCode) throws Throwable {
        scenarioContext.testData().setCountryCode(countryCode);
    }

    @And("^I set the city id to \"([^\"]*)\"$")
    public void setCityId(int cityID) throws Throwable {
        scenarioContext.testData().setCityId(cityID);
        searchRequest.addCityId();
    }

    @And("^I set the latitude to \"([^\"]*)\"$")
    public void setLatitude(double lat) throws Throwable {
        scenarioContext.testData().setLat(lat);
        searchRequest.addLatitude();
    }

    @And("^I set the longitude to \"([^\"]*)\"$")
    public void setLongitude(double lon) throws Throwable {
        scenarioContext.testData().setLon(lon);
        searchRequest.addLongitude();
    }

    @When("^I send the request$")
    public void sendSearchRequest() throws Throwable {

        SearchResponse searchResponse = searchRequest.send();

        scenarioContext.setSearchResponse(searchResponse);
    }

    @Then("^I receive a \"([^\"]*)\" status code in the response$")
    public void checkStatusCode(int statusCode) throws Throwable {
        assertions.assertEquals("Status Code", statusCode, scenarioContext.getSearchResponse().getStatusCode());
    }

    @And("^I see the correct city name in the response$")
    public void checkCityName() {
        assertions.assertEquals("cityName", scenarioContext.testData().getCityName(), scenarioContext.getSearchResponse().getResponse().getName());
    }

    @And("^I see the correct city id in the response$")
    public void checkCityId() {
        assertions.assertEquals("cityId", scenarioContext.testData().getCityId(), scenarioContext.getSearchResponse().getResponse().getId());
    }

    @And("^I see the correct latitude and longitude in the response$")
    public void checkLatitudeLongitude() {
        Assertions assertions = new Assertions(scenarioContext);
        assertions.enableSoftAssertions();

        assertions.assertEquals("lat", scenarioContext.testData().getLat(), scenarioContext.getSearchResponse().getResponse().getCoord().getLat());
        assertions.assertEquals("lon", scenarioContext.testData().getLon(), scenarioContext.getSearchResponse().getResponse().getCoord().getLon());

        assertions.logFinalResult();
    }
}
