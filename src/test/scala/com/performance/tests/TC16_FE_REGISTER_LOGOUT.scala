package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC16_FE_REGISTER_LOGOUT extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://parabank.parasoft.com")

  // scenario configuration

  val scn = scenario("USER REGISTRATION & LOGOUT")
    .exec(
      http("STEP 1-VISIT HOME PAGE")
        .get("/parabank/index.htm")
        .check(status.is(200))
        .check(responseTimeInMillis.lte(4000))
    )

    .pause(4)

    .exec(
      http("STEP 2-CLICK ON REGISTER BUTTON TO LOAD THE FORM")
        .get("/parabank/register.htm")
        .check(status.is(200))
        .check(responseTimeInMillis.lte(4000))
    )

    .pause(1,5)

    .exec(
      http("STEP 3-FILL ALL THE FIELDS & CLICK ON REGISTER BUTTON")
        .post("/parabank/register.htm")
        .formParam("customer.firstName", "Ajay")
        .formParam("customer.lastName", "Sawanth")
        .formParam("customer.address.street", "HillCounty")
        .formParam("customer.address.city", "Hyderabad")
        .formParam("customer.address.state", "Telangana")
        .formParam("customer.address.zipCode", "500081")
        .formParam("customer.phoneNumber", "8976567891")
        .formParam("customer.ssn", "1231234568")
        .formParam("customer.username", "kiran")
        .formParam("customer.password", "kiran")
        .formParam("repeatedPassword", "kiran")
        .check(status.in(200 to 299))
        .check(status.not(400), status.not(500))
        .check(substring("Your account was created successfully"))
        .check(substring("You are now logged in"))
    )

    .pause(6)

    .exec(
      http("STEP 4-CLICK ON LOGOUT")
        .get("/parabank/logout.htm")
        .check(status.in(200 to 299))
        .check(status.not(400), status.not(500))
        .check(substring("Customer Login"))
    )

  // setUp configuration

  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpConfig))

}