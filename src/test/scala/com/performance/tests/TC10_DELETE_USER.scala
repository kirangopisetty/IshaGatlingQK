package com.performance.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC10_DELETE_USER extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://gorest.co.in")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")
  http.header("Authorization", "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")

  // scenario configuration

  val scn = scenario("AUTHORIZED APIs TESTING-TO DELETE AN USER")
    .exec(
     http("DELETE AN EXISTING USER")
    .delete("/public/v2/users/2400440")
       .header("Authorization", "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")
    .check(status.is(204))
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