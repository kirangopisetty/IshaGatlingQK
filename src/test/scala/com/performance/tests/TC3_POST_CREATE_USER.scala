package com.performance.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC3_POST_CREATE_USER extends Simulation {

  // http configuration

  val httpConfig = http.baseUrl("https://thetestingworldapi.com")
  http.header("Accept", "application/json") // what client is expecting from server
  http.header("Content-Type", "application/json") // what client is sending to server

  // scenario configuration

  val scn = scenario("STUDENT DATABASE-CREATION OF STUDENTS")

    .exec(
      http("To create a student using POST http method")
      .post("/api/studentsDetails")
      .body(RawFileBody("src/test/resources/TestData/createUser.json")).asJson
      .check(status.is(201))  // check if response code = 201
      .check(status.in(200 to 299))  // check if response code = { 200 to 299 }
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
    scn.inject(rampUsers(5).during(10))
  ).protocols(httpConfig)
}