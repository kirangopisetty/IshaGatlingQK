package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC8_POST_CREATE_USER extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://gorest.co.in")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")
 // http.header("Authorization", "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")

  val sessionHeaders = Map("Authorization" -> "Bearer ba27e6bcbebdb6672d44749409fa9d17d58e44177848fa7079a86ee037657094")


  // scenario configuration

  val scn = scenario("AUTHORIZED APIs TESTING-TO CREATE A USER")
    .exec(
      http("POST-CREATE A USER")
    .post("/public/v2/users")
        .headers(sessionHeaders)
    .body(RawFileBody("src/test/resources/TestData/createNewUser.json")).asJson
    .check(status.in(200 to 299))
        .check(jsonPath("$.id").ofType[Int])
        .check(jsonPath("$.name").ofType[String])
        .check(bodyString.saveAs("BODY"))
    )

    .exec(session => {
      val response = session("BODY").as[String]
      println("\n")
      println(s"Response body: \n$response")
      session
    })
  // setUp configuration

  setUp(scn.inject(rampUsers(1).during(4))).protocols(httpConfig)

}