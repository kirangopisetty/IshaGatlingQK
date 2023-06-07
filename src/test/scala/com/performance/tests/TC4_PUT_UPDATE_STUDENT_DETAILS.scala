package com.performance.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC4_PUT_UPDATE_STUDENT_DETAILS extends Simulation {

  // http configuration

    val httpConfig = http.baseUrl("https://thetestingworldapi.com")
    http.header("Accept", "application/json")  // what is expected from server
    http.header("Content-Type", "application/json")  // what is going to server

  // scneario configuration

  val scn = scenario("UPDATE ACTIVITY ON STUDENT RECORDS")
    .exec(
         http("To update an existing student details")
        .put("/api/studentsDetails/7549916")
        .body(RawFileBody("src/test/resources/TestData/updateUser.json")).asJson
        .check(status.is(200))
        .check(status.in(200 to 299))
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
    scn.inject(rampUsersPerSec(3).to(10).during(10))
  ).protocols(httpConfig)

}