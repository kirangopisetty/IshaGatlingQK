package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC18_GUI_BOOKAPPT extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://katalon-demo-cura.herokuapp.com")

  // scenario configuration

  val scn = scenario("LOGIN --> BOOK AN APPOINTMENT --> LOGOUT")
    .exec(
      http("STEP1-VISIT HOME PAGE")
        .get("/profile.php#login")
        .check(status.is(200))
    )

    .pause(5)

    .exec(
      http("STEP2-LOGIN TO THE APPLICATION")
        .post("/authenticate.php")        // click on login button
        .formParam("username", "John Doe")
        .formParam("password", "ThisIsNotAPassword")
        .check(status.in(200 to 299))
        .check(responseTimeInMillis.lte(5000))
    )

    .pause(1, 5)

    .exec(
      http("STEP3-BOOK AN APPOINTMENT")
        .post("/appointment.php")       // click on book appointment button
        .formParam("facility", "Hongkong CURA Healthcare Center")
        .formParam("hospital_readmission", "No")
        .formParam("programs", "Medicare")
        .formParam("visit_date", "29/06/2023")
        .formParam("comment", "regular health checkup")
        .check(status.in(200 to 299))
        .check(substring("Appointment Confirmation"))
        .check(substring("Please be informed that your appointment has been booked as following"))
        .check(responseTimeInMillis.lte(5000))
    )

    .pause(5)

    .exec(
      http("STEP4-CLICK ON LOGOUT")
        .get("/authenticate.php?logout")      // click on logout button
        .check(status.in(200 to 299))
        .check(responseTimeInMillis.lte(5000))
        .check(substring("CURA Healthcare Service"))
        .check(substring("We Care About Your Health"))
    )

  // setUp configuration

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}