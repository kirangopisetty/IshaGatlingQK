package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC1_GET_ALL_STUDENT_DETAILS extends Simulation {

  // http configuration

    val httpConfig =  http.baseUrl("https://thetestingworldapi.com")
                      http.header("Accept", "application/json")

  // scenario configuration

    val scn = scenario("TESTING THE STUDENT RECORDS USING APIs")
      .exec(
            http("To get all the student details")
            .get("/api/studentsDetails")
              .check(status.is(200))
              .check(status.in(200 to 299))
              .check(status.not(400), status.not(500), status.not(503))
              .check(header("Content-Type").exists)
              .check(header("Server").exists)
              .check(header("Content-Length").exists)
              .check(header("Date").exists)
              .check(header("Content-Type").is("application/json; charset=utf-8"))
              .check(header("Server").is("Microsoft-IIS/10.0"))
              .check(substring("id"))
              .check(substring("first_name"))
              .check(substring("middle_name"))
              .check(substring("last_name"))
              .check(substring("date_of_birth"))
              .check(responseTimeInMillis.lte(4000))
              .check(jsonPath("$[2].first_name").is("Krishna"))
              .check(jsonPath("$[9].last_name").is("Shaker"))
              .check(jsonPath("$[4].last_name").not("null"))
      )

  // setUp configuration

    setUp(
      scn.inject(atOnceUsers(10))
    ).protocols(httpConfig)

}