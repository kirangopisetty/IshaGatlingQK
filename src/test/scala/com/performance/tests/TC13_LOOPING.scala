package com.performance.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC13_LOOPING extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://thetestingworldapi.com")
  http.acceptHeader("application/json")

  // scenario configuration

  val scn = scenario("LOOPING EXAMPLE")

    .repeat(5) {
      exec(
        http("GET A STUDENT RECORD DETAILS IN A LOOP")
          .get("/api/studentsDetails/7563046")
          .check(status.is(200))
          .check(bodyString.saveAs("responseBody"))
      )

        .pause(1)

        .exec { session =>
          println("\nThe student details retrieved are >>>>\n")
          println(session("responseBody").as[String])
          println("\n")
          session
        }
    }
  // setUp configuration

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

}
