package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC2_GET_SPECIFIC_STUDENT_DETAILS extends Simulation {

  // http configuration

  val httpConfig =  http.baseUrl("https://thetestingworldapi.com")
                    http.header("Accept", "application/json")

  // scenario configuration

  val scn = scenario("Get a specific student record details")
        .exec(
          http("GET STUDENT DETAILS")
          .get("/api/studentsDetails/7575004")
          .check(status.is(200))
          .check(bodyString.saveAs("BODY"))
            .check(bodyString.saveAs("BODY"))
        )
    .exec(session => {
      val response = session("BODY").as[String]
      println("\n")
      println(s"Response body: \n$response")
      session
    })

  // setUp configuration

    setUp(
      scn.inject(atOnceUsers(1))
    ).protocols(httpConfig)
}