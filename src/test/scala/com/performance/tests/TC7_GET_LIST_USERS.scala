package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC7_GET_LIST_USERS extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://gorest.co.in")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")
  http.header("Authorization", "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")

  // scenario configuration

  val scn = scenario("AUTHORIZED APIs TESTING-TO GET ALL USERS")
    .exec(
      http("GET-LIST ALL USERS")
        .get("/public/v2/users")
        .check(status.is(200))
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