package com.origin.qa.api.projectName.steps;

import com.origin.qa.api.projectName.utils.ScenarioContext;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class CommonStepsDef extends BaseStepsDef {

    public CommonStepsDef(ScenarioContext scenarioContext) throws Throwable {
        super(scenarioContext);
    }

    @Before
    public void setUp(Scenario scenario) throws IOException {
        super.setUp(scenario);
    }

    @After
    public void tearDown() throws IOException {
        super.tearDown();
    }
}