var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "65",
        "ok": "0",
        "ko": "65"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "-",
        "ko": "73"
    },
    "maxResponseTime": {
        "total": "179",
        "ok": "-",
        "ko": "179"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "-",
        "ko": "99"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "-",
        "ko": "23"
    },
    "percentiles1": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "percentiles2": {
        "total": "122",
        "ok": "-",
        "ko": "122"
    },
    "percentiles3": {
        "total": "127",
        "ok": "-",
        "ko": "127"
    },
    "percentiles4": {
        "total": "138",
        "ok": "-",
        "ko": "138"
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
    "count": 65,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.5",
        "ok": "-",
        "ko": "6.5"
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
        "ok": "0",
        "ko": "65"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "-",
        "ko": "73"
    },
    "maxResponseTime": {
        "total": "179",
        "ok": "-",
        "ko": "179"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "-",
        "ko": "99"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "-",
        "ko": "23"
    },
    "percentiles1": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "percentiles2": {
        "total": "122",
        "ok": "-",
        "ko": "122"
    },
    "percentiles3": {
        "total": "127",
        "ok": "-",
        "ko": "127"
    },
    "percentiles4": {
        "total": "138",
        "ok": "-",
        "ko": "138"
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
    "count": 65,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.5",
        "ok": "-",
        "ko": "6.5"
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
