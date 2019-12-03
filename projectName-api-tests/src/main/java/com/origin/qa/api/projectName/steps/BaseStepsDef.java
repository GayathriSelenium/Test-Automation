package com.origin.qa.api.projectName.steps;

import com.origin.qa.api.projectName.utils.ScenarioContext;

public class BaseStepsDef extends com.origin.qa.framework.utils.BaseStepsDef {

    protected ScenarioContext scenarioContext;

    public BaseStepsDef(ScenarioContext scenarioContext) throws Throwable {
        super(scenarioContext);
        this.scenarioContext = scenarioContext;
    }

}