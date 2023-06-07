package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC9_PUT_UPDATE_USER extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://gorest.co.in")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")
  http.header("Authorization", "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")
  // val sessionHeaders = Map("Authorization" -> "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")

  // scenario configuration

  val scn = scenario("AUTHORIZED APIs TESTING-TO UPDATE AN USER")
    .exec(
  http("PATCH-UPDATE AN EXISTING USER")
    .patch("/public/v2/users/2400440")
    //.headers(sessionHeaders)
    .header("Authorization", "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")
    .body(RawFileBody("src/test/resources/TestData/updateExistingUser.json")).asJson
    .check(status.in(200 to 299))
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