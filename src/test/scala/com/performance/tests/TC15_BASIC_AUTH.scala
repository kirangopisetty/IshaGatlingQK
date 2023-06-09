package com.performance.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC15_BASIC_AUTH extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("http://httpbin.org")
  http.acceptHeader("application/json")
  http.authorizationHeader("Basic dXNlcjpwYXNzd2Q=")

  // scenario configuration

  val scn = scenario("BASIC AUTHORIZATION API")

    .exec(
      http("AUTH API TESTING")
        .get("/basic-auth/user/passwd")
        .header("Authorization", "Basic dXNlcjpwYXNzd2Q=")
        .check(status.is(200))
        .check(substring("authenticated"))
        .check(substring("true"))
        .check(bodyString.saveAs("responseBody"))
    )

    .exec { session =>
      println(session("responseBody").as[String])
      session
    }

  // setUp configuration

  setUp(scn.inject(rampUsers(2).during(10))).protocols(httpConfig)

}