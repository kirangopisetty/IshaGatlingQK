package com.performance.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC5_DELETE_STUDENT extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://thetestingworldapi.com")
  http.header("Accept", "application/json")

  // scenario configuration

  val scn = scenario("Deleting the student record")
    .exec(
        http("DELETE STUDENT")
        .delete("/api/studentsDetails/7549916")
        .check(status.is(200))
        .check(status.not(400))
        .check(status.not(500))
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
    scn.inject(constantUsersPerSec(2).during(10))
  ).protocols(httpConfig)

}