package com.origin.qa.api.projectName.utils;

import com.origin.qa.framework.utils.BaseScenarioContext;
import com.origin.qa.api.projectName.request.SearchRequest;
import com.origin.qa.api.projectName.response.SearchResponse;

public class ScenarioContext extends BaseScenarioContext {

    private ThreadLocal<SearchRequest> searchRequest = new ThreadLocal<>();
    private ThreadLocal<SearchResponse> searchResponse = new ThreadLocal<>();
    private ThreadLocal<TestData> testData = new ThreadLocal<>();

    public SearchRequest getSearchRequest() {
        return searchRequest.get();
    }

    public void setSearchRequest(SearchRequest request) {
        searchRequest.set(request);
    }

    public SearchResponse getSearchResponse() {
        return searchResponse.get();
    }

    public void setSearchResponse(SearchResponse response) {
        searchResponse.set(response);
    }

    public TestData testData() {
        if (testData.get() == null) {
            testData.set(new TestData());
        }

        return testData.get();
    }
}
