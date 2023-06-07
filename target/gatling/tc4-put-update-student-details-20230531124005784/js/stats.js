var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "65",
        "ok": "65",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2440",
        "ok": "2440",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "483",
        "ok": "483",
        "ko": "-"
    },
    "percentiles1": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "percentiles2": {
        "total": "177",
        "ok": "177",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2260",
        "ok": "2260",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 59,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.909",
        "ok": "5.909",
        "ko": "-"
    }
},
contents: {
"req_to-update-an-ex-93750": {
        type: "REQUEST",
        name: "To update an existing student details",
path: "To update an existing student details",
pathFormatted: "req_to-update-an-ex-93750",
stats: {
    "name": "To update an existing student details",
    "numberOfRequests": {
        "total": "65",
        "ok": "65",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2440",
        "ok": "2440",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "483",
        "ok": "483",
        "ko": "-"
    },
    "percentiles1": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "percentiles2": {
        "total": "177",
        "ok": "177",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2260",
        "ok": "2260",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 59,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.909",
        "ok": "5.909",
        "ko": "-"
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
