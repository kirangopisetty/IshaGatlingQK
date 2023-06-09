var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "27",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "2289",
        "ok": "2289",
        "ko": "10130"
    },
    "maxResponseTime": {
        "total": "10233",
        "ok": "8418",
        "ko": "10233"
    },
    "meanResponseTime": {
        "total": "3749",
        "ok": "3032",
        "ko": "10195"
    },
    "standardDeviation": {
        "total": "2686",
        "ok": "1699",
        "ko": "46"
    },
    "percentiles1": {
        "total": "3574",
        "ok": "2591",
        "ko": "10229"
    },
    "percentiles2": {
        "total": "7508",
        "ok": "2591",
        "ko": "10230"
    },
    "percentiles3": {
        "total": "8589",
        "ok": "4554",
        "ko": "10231"
    },
    "percentiles4": {
        "total": "10181",
        "ok": "7509",
        "ko": "10232"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 800 ms",
    "count": 27,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.727",
        "ok": "2.455",
        "ko": "0.273"
    }
},
contents: {
"req_get-student-det-23523": {
        type: "REQUEST",
        name: "GET STUDENT DETAILS",
path: "GET STUDENT DETAILS",
pathFormatted: "req_get-student-det-23523",
stats: {
    "name": "GET STUDENT DETAILS",
    "numberOfRequests": {
        "total": "30",
        "ok": "27",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "2289",
        "ok": "2289",
        "ko": "10130"
    },
    "maxResponseTime": {
        "total": "10233",
        "ok": "8418",
        "ko": "10233"
    },
    "meanResponseTime": {
        "total": "3749",
        "ok": "3032",
        "ko": "10195"
    },
    "standardDeviation": {
        "total": "2686",
        "ok": "1699",
        "ko": "46"
    },
    "percentiles1": {
        "total": "3574",
        "ok": "2591",
        "ko": "10229"
    },
    "percentiles2": {
        "total": "7508",
        "ok": "2591",
        "ko": "10230"
    },
    "percentiles3": {
        "total": "8589",
        "ok": "4554",
        "ko": "10231"
    },
    "percentiles4": {
        "total": "10181",
        "ok": "7509",
        "ko": "10232"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 800 ms",
    "count": 27,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.727",
        "ok": "2.455",
        "ko": "0.273"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
