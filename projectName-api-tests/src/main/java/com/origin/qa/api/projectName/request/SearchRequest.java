package com.origin.qa.api.projectName.request;

import com.origin.qa.api.projectName.response.SearchResponse;
import com.origin.qa.api.projectName.utils.ScenarioContext;
import com.origin.qa.framework.utils.PropertiesLoader;
import com.origin.qa.framework.ws.RestRequest;

public class SearchRequest extends RestRequest {

    protected ScenarioContext scenarioContext;

    public SearchRequest(ScenarioContext scenarioContext) {

        super(scenarioContext);

        this.scenarioContext = scenarioContext;

        setBaseUri(PropertiesLoader.getInstance().getEnvProperties("projectName.host"));
        setPort(PropertiesLoader.getInstance().getEnvProperties("projectName.port"));
        setServiceName("data/2.5/weather");

    }

    public void addCityName() {
        addParameter("q", scenarioContext.testData().getCityName() + "," + scenarioContext.testData().getCountryCode());
    }

    public void addCityId() {
        addParameter("id", String.valueOf(scenarioContext.testData().getCityId()));
    }

    public void addLatitude() {
        addParameter("lat", String.valueOf(scenarioContext.testData().getLat()));
    }

    public void addLongitude() {
        addParameter("lon", String.valueOf(scenarioContext.testData().getLon()));
    }

    public SearchResponse send() throws Throwable {

        String apiKey = PropertiesLoader.getInstance().getEnvProperties("projectName.api.key");

        addParameter("APPID", apiKey);

        addHeader("Accept", "application/json");

        sendGetRestRequest();

        return new SearchResponse(scenarioContext, getRestResponse());
    }
}
