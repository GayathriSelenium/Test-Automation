@regression-test @weather-data
Feature: Get current weather data

  @id-get-weather-data-city-name
  Scenario: Search via city name

    Given I build an OpenWeather current weather data request
    And I set the city name to "Brisbane"
    And I set the country code to "au"
    When I send the request
    Then I receive a "200" status code in the response
    And I see the correct city name in the response

  @id-get-weather-data-city-id
  Scenario: Search via city id
    Given I build an OpenWeather current weather data request
    And I set the city id to "2174003"
    When I send the request
    Then I receive a "200" status code in the response
    And I see the correct city id in the response

  @id-get-weather-data-lat-lon
  Scenario: Search via latitude and longitude
    Given I build an OpenWeather current weather data request
    And I set the latitude to "-27.47"
                                           And I set the longitude to "153.02"
    When I send the request
    Then I receive a "200" status code in the response
    And I see the correct latitude and longitude in the response