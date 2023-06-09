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
        "total": "3150",
        "ok": "3150",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "32780",
        "ok": "32780",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "17965",
        "ok": "17965",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14815",
        "ok": "14815",
        "ko": "-"
    },
    "percentiles1": {
        "total": "26854",
        "ok": "26854",
        "ko": "-"
    },
    "percentiles2": {
        "total": "28336",
        "ok": "28336",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29817",
        "ok": "29817",
        "ko": "-"
    },
    "percentiles4": {
        "total": "31299",
        "ok": "31299",
        "ko": "-"
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
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.053",
        "ok": "0.053",
        "ko": "-"
    }
},
contents: {
"req_auth-api-testin-ddc7c": {
        type: "REQUEST",
        name: "AUTH API TESTING",
path: "AUTH API TESTING",
pathFormatted: "req_auth-api-testin-ddc7c",
stats: {
    "name": "AUTH API TESTING",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3150",
        "ok": "3150",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "32780",
        "ok": "32780",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "17965",
        "ok": "17965",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14815",
        "ok": "14815",
        "ko": "-"
    },
    "percentiles1": {
        "total": "26854",
        "ok": "26854",
        "ko": "-"
    },
    "percentiles2": {
        "total": "28336",
        "ok": "28336",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29817",
        "ok": "29817",
        "ko": "-"
    },
    "percentiles4": {
        "total": "31299",
        "ok": "31299",
        "ko": "-"
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
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.053",
        "ok": "0.053",
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
