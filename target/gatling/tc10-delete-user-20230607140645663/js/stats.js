var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "maxResponseTime": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "meanResponseTime": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "percentiles2": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "percentiles3": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "percentiles4": {
        "total": "446",
        "ok": "-",
        "ko": "446"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"req_delete-an-exist-35548": {
        type: "REQUEST",
        name: "DELETE AN EXISTING USER",
path: "DELETE AN EXISTING USER",
pathFormatted: "req_delete-an-exist-35548",
stats: {
    "name": "DELETE AN EXISTING USER",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "maxResponseTime": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "meanResponseTime": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "percentiles2": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "percentiles3": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "percentiles4": {
        "total": "446",
        "ok": "-",
        "ko": "446"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
