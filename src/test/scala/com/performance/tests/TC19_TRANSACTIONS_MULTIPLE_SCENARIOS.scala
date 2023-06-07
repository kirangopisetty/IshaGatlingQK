package com.performance.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class TC19_TRANSACTIONS_MULTIPLE_SCENARIOS extends Simulation {

  // http configuration

  val httpConfig =  http.baseUrl("https://reqres.in")
                    http.acceptHeader("application/json")
                    http.contentTypeHeader("application/json")

  // scenario configuration

  val scnGET = scenario("SCENARIO1-GET-APIs")
    .exec(
      http("GET-LIST OF USERS")
        .get("/api/users?page=2")
        .check(status.is(200))
        .check(substring("id"))
        .check(substring("email"))
        .check(substring("first_name"))
        .check(substring("last_name"))
        .check(substring("avatar"))
        .check(responseTimeInMillis.lte(1000))
    )

    .pause(4)

    .exec(
      http("GET-SINGLE USER")
        .get("/api/users/5")
        .check(status.is(200))
        .check(substring("id"))
        .check(substring("email"))
        .check(substring("first_name"))
        .check(substring("last_name"))
        .check(substring("avatar"))
        .check(responseTimeInMillis.lte(1000))
    )

  val scnPOST = scenario("SCENARIO2-POST-APIs")
    .exec(
      http("POST-CREATE USER")
        .post("/api/users")
        .body(RawFileBody("src/test/resources/TestData/userCreation.json")).asJson
        .check(status.is(201))
        .check(substring("id"))
        .check(substring("name"))
        .check(substring("job"))
        .check(substring("createdAt"))
        .check(responseTimeInMillis.lte(1000))
    )

  val scnPUT = scenario("SCENARIO3-PUT-APIs")
    .exec(
      http("PUT-UPDATE USER")
        .put("/api/users/2")
        .body(RawFileBody("src/test/resources/TestData/userUpdate.json")).asJson
        .check(status.is(200))
        .check(substring("job"))
        .check(substring("name"))
        .check(substring("updatedAt"))
        .check(responseTimeInMillis.lte(1000))
    )

  val scnDELETE = scenario("SCENARIO4-DELETE-APIs")
    .exec(
      http("DELETE USER")
        .delete("/api/users/6")
        .check(status.is(204))
        .check(responseTimeInMillis.lte(1000))
    )

  // setUp configuration

  setUp(scnGET.inject(atOnceUsers(1)),
        scnPOST.inject(atOnceUsers(2)),
        scnPUT.inject(atOnceUsers(3)),
        scnDELETE.inject(atOnceUsers(4))
    ).protocols(httpConfig)

}