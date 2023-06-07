package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC14_DDT_FEEDERS extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://reqres.in")
  http.acceptHeader("application/json")
  val csvFeeder = csv("src/test/resources/TestData/empDetails.csv").circular

  // scenario configuration

  val scn = scenario("DATA DRIVEN TESTING USING CSV FEEDERS")
    .repeat(12) {
      feed(csvFeeder)
      .exec(
        http("VERIFY THE FIRST_NAME OF ALL 12 EMPLOYEE IDs")
          .get("/api/users/${empID}")
          .check(status.is(200))
          .check(jsonPath("$.data.first_name").is("${fName}"))
          .check(bodyString.saveAs("responseBody"))
      )

        .exec { session =>
          println("\nThe response body received from server is >>>>\n")
          println(session("responseBody").as[String])
          session
        }
    }

    // setUp configuration

    setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

//    setUp(scn.inject(rampUsers(1).during(10))).protocols(httpConfig)
  //  setUp(scn.inject(nothingFor(10),rampUsers(10).during(5))).protocols(httpConfig)
  // https://gatling.io/docs/gatling/reference/current/core/injection/

}