# projectName-api-tests

## Dependencies:

* User account created in with read permissions [Artifactory](http://artifactory.ig.orgn.io)
* JDK added to PATH
* Maven added to PATH

## Access to Artifactory:

* Move [settings.txt](settings.txt) to `C:\Users\<UserName>\.m2`
* Rename `settings.txt` file to `settings.xml`
* Update `${security.getCurrentUsername()}` in `settings.xml` to your Artifcatory user name
* Update `${security.getEscapedEncryptedPassword()}` in `settings.txt` to your escape encrypted user name from Artifactory

## Steps:

* Create copy of projectName-api-tests folder
* Rename folder from `projectName-api-tests` to `your-project-name-api-tests`
* Open pom.xml in notepad and replace all occurrences of `projectName` with `your-project-name`
* Open project in Intellij
* In Intellij, go to `src>main>java` and highlight the package `com.origin.qa.api.projectName`
* Press SHIFT+F6 to rename the package and replace `projectName` with `your-project-name`, a prompt may appear at the foot of the window asking if you would like to do the refactor, select yes
* Highlight the top most folder in the Project view and press SHIFT+F6, replace all `projectName` with `your-project-name`
* Close intellij
* Open the project directory in File Explorer
* Delete the `.idea` folder, the `projectName-api-tests.iml` file, and the README.md contents
* Reopen project in Intellij

## Project info:

* Set environment properties, i.e url and basic auth details in `src>main>resources>env`.  There is a `uat.properties` file there as an example, create one per environment as required
* See `src\main\java\com\com.origin.qa.api.projectName` directory for example api classes in the pages and steps folders
* Feature files are kept in `src\main\resources\tests`
* Test reports can be found in `target/cucumber-html-reports/overview-features.html` after a test execution.

## Running tests

Tests can be executed via Maven.  To do this, create a Maven runner by clicking on the `Add Configuration` option under the menu bar in Intellij.
* Select the plus icon
* Select the Maven option from the drop down menu
* Give the Maven runner a name, i.e. `TEMP`
* If the working directory is empty, point it to the directory holding the project pom.xml file, this is usually in the root folder of the project
* Add the command line option `clean test -Denv.name=uat -Dcucumber.tags=@regression-test -P local`

The following parameters will need to be included in the Maven runner if you are trying to execute the test suite on the Origin corporate network:
* `

Do not store your AD password in the sourcecode of your project!

## Maven runner parameters breakdown:

* `-Denv.name=uat` specifies the properties file to be used, in this case the file [uat.properties](env/uat.properties) will be used from `src/main/resources/env/uat.properties`.
* `-Dcucumber.tags=@regression-test` specifies the tests to run by tag, multiple tags will be treated as `AND`.  Test suites can be created using tags in the feature file,. i.e. `@regression-test`, `@smoke-test`, etc.  It is best practice to give every scenario a unique tag so that they can be identified an re-ran without having to execute an entire test suite

## Optional Maven runner parameters:

* `-Dcucumber.thread.count=5 -Dcucumber.retry.limit=2`, these specify the amount of concurrent tests to run `cucumber.thread.count` and the amount of times to retry a failed test `cucumber.retry.limit`.  The defaults for these are 1, but can be specified in the runner to overwrite the defaults as required