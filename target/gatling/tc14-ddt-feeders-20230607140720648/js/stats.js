var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12",
        "ok": "12",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles1": {
        "total": "377",
        "ok": "377",
        "ko": "-"
    },
    "percentiles2": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "percentiles3": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles4": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 10,
    "percentage": 83
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 2,
    "percentage": 17
},
    "group3": {
    "name": "t > 800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.4",
        "ok": "2.4",
        "ko": "-"
    }
},
contents: {
"req_verify-the-firs-46466": {
        type: "REQUEST",
        name: "VERIFY THE FIRST_NAME OF ALL 12 EMPLOYEE IDs",
path: "VERIFY THE FIRST_NAME OF ALL 12 EMPLOYEE IDs",
pathFormatted: "req_verify-the-firs-46466",
stats: {
    "name": "VERIFY THE FIRST_NAME OF ALL 12 EMPLOYEE IDs",
    "numberOfRequests": {
        "total": "12",
        "ok": "12",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles1": {
        "total": "377",
        "ok": "377",
        "ko": "-"
    },
    "percentiles2": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "percentiles3": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles4": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 10,
    "percentage": 83
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 2,
    "percentage": 17
},
    "group3": {
    "name": "t > 800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.4",
        "ok": "2.4",
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
