var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "17",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "93",
        "ko": "1517"
    },
    "maxResponseTime": {
        "total": "2480",
        "ok": "1035",
        "ko": "2480"
    },
    "meanResponseTime": {
        "total": "468",
        "ok": "196",
        "ko": "2005"
    },
    "standardDeviation": {
        "total": "697",
        "ok": "232",
        "ko": "393"
    },
    "percentiles1": {
        "total": "106",
        "ok": "104",
        "ko": "2018"
    },
    "percentiles2": {
        "total": "279",
        "ok": "180",
        "ko": "2249"
    },
    "percentiles3": {
        "total": "2041",
        "ok": "620",
        "ko": "2434"
    },
    "percentiles4": {
        "total": "2392",
        "ok": "952",
        "ko": "2471"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1.7",
        "ko": "0.3"
    }
},
contents: {
"req_delete-student-a9f24": {
        type: "REQUEST",
        name: "DELETE STUDENT",
path: "DELETE STUDENT",
pathFormatted: "req_delete-student-a9f24",
stats: {
    "name": "DELETE STUDENT",
    "numberOfRequests": {
        "total": "20",
        "ok": "17",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "93",
        "ko": "1517"
    },
    "maxResponseTime": {
        "total": "2480",
        "ok": "1035",
        "ko": "2480"
    },
    "meanResponseTime": {
        "total": "468",
        "ok": "196",
        "ko": "2005"
    },
    "standardDeviation": {
        "total": "697",
        "ok": "232",
        "ko": "393"
    },
    "percentiles1": {
        "total": "106",
        "ok": "104",
        "ko": "2018"
    },
    "percentiles2": {
        "total": "279",
        "ok": "180",
        "ko": "2249"
    },
    "percentiles3": {
        "total": "2041",
        "ok": "620",
        "ko": "2434"
    },
    "percentiles4": {
        "total": "2392",
        "ok": "952",
        "ko": "2471"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1.7",
        "ko": "0.3"
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
