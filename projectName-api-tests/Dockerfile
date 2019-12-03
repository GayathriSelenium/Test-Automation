FROM openjdk:8-jre-alpine

COPY target/classes/tests classes/tests
ADD target/projectName-api-tests-*.jar app.jar

ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-jar", "app.jar"]
