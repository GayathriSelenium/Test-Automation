package com.origin.qa.api.projectName.response;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.restassured.response.Response;
import com.origin.qa.api.projectName.model.OpenWeatherMapSearchRS;
import com.origin.qa.api.projectName.utils.ScenarioContext;
import com.origin.qa.framework.ws.RestResponse;

public class SearchResponse extends RestResponse {

    private OpenWeatherMapSearchRS response;

    public SearchResponse(ScenarioContext scenarioContext, Response response) throws Throwable {
        super(scenarioContext, response);
        setOpenWeatherResponse();
    }

    private void setOpenWeatherResponse() throws Throwable {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        response = objectMapper.readValue(getResponseBody(), OpenWeatherMapSearchRS.class);
    }

    public OpenWeatherMapSearchRS getResponse() {
        return response;
    }

}
