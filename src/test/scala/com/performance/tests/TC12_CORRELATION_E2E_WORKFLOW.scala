package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC12_CORRELATION_E2E_WORKFLOW extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://thetestingworldapi.com")
  http.header("Accept", "application/json")

  // scenario configuration

  val scn = scenario("CORRELATION-API-CHAINING")
    .exec(
      http("EXTRACT ID FROM 1st API")
        .get("/api/studentsDetails")                // 1st API
        .check(status.is(200))
        .check(jsonPath("$[7].id").saveAs("extractedID"))
    )

    .pause(5)

    .exec(
      http("REFER THE EXTRACTED ID FROM 1st API TO PRINT THE DETAILS")
        .get("/api/studentsDetails/${extractedID}")
        .check(status.is(200))
        .check(jsonPath("$.status").is("true"))
        .check(jsonPath("$.data.last_name").is("Priya"))
        .check(bodyString.saveAs("BODY"))
    )
    .exec(session => {
      val response = session("BODY").as[String]
      println("\n")
      println(s"Response body: \n$response")
      session
    })

    .pause(1,10)

    .exec(
      http("REFER THE EXTRACTED ID FROM 1st API TO DELETE THE RECORD")
        .delete("/api/studentsDetails/${extractedID}")
        .check(status.is(200))
        .check(jsonPath("$.status").is("true"))
        .check(jsonPath("$.msg").is("Delete  data success"))
        .check(bodyString.saveAs("BODY"))
    )
    .exec(session => {
      val response = session("BODY").as[String]
      println("\n")
      println(s"Response body: \n$response")
      session
    })

  // setUp configuration

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

}