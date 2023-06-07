package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC6_ALL_TEST_CASES extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://thetestingworldapi.com")
  http.header("Accept", "application/json")
  http.header("Content-Type", "application/json")

  // scenario configuration

  val scn = scenario("TEST ALL HTTP METHODS OF STUDENT DETAILS")
    .exec(
       http("GET ALL STUDENTS DETAILS")
      .get("/api/studentsDetails")
      .check(status.is(200))
    )
    .pause(5)

    .exec(
       http("CREATE A STUDENT")
      .post("/api/studentsDetails")
      .body(RawFileBody("src/test/resources/TestData/createUser.json")).asJson
      .check(status.is(201))
    )

    .pause(5)

    .exec(
       http("UPDATE A STUDENT")
      .put("/api/studentsDetails/7549917")
      .body(RawFileBody("src/test/resources/TestData/updateUser.json")).asJson
      .check(status.is(200))
    )

    .pause(5,10)

    .exec(
       http("DELETE A STUDENT")
      .delete("/api/studentsDetails/7549915")
      .check(status.is(200))
    )

  // setUp configuration

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConfig)

}