var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "percentiles1": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "percentiles2": {
        "total": "496",
        "ok": "496",
        "ko": "-"
    },
    "percentiles3": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "percentiles4": {
        "total": "565",
        "ok": "565",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_addition-soap-a-7e9c5": {
        type: "REQUEST",
        name: "ADDITION-SOAP API",
path: "ADDITION-SOAP API",
pathFormatted: "req_addition-soap-a-7e9c5",
stats: {
    "name": "ADDITION-SOAP API",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "percentiles2": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "percentiles3": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "percentiles4": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_subtraction-soa-ddcb9": {
        type: "REQUEST",
        name: "SUBTRACTION-SOAP API",
path: "SUBTRACTION-SOAP API",
pathFormatted: "req_subtraction-soa-ddcb9",
stats: {
    "name": "SUBTRACTION-SOAP API",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles2": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles3": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles4": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
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
