var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "-",
        "ko": "140"
    },
    "maxResponseTime": {
        "total": "217",
        "ok": "-",
        "ko": "217"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "-",
        "ko": "162"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles1": {
        "total": "168",
        "ok": "-",
        "ko": "168"
    },
    "percentiles2": {
        "total": "168",
        "ok": "-",
        "ko": "168"
    },
    "percentiles3": {
        "total": "173",
        "ok": "-",
        "ko": "173"
    },
    "percentiles4": {
        "total": "195",
        "ok": "-",
        "ko": "195"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    }
},
contents: {
"req_to-get-all-the--7e35e": {
        type: "REQUEST",
        name: "To get all the student details",
path: "To get all the student details",
pathFormatted: "req_to-get-all-the--7e35e",
stats: {
    "name": "To get all the student details",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "-",
        "ko": "140"
    },
    "maxResponseTime": {
        "total": "217",
        "ok": "-",
        "ko": "217"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "-",
        "ko": "162"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles1": {
        "total": "168",
        "ok": "-",
        "ko": "168"
    },
    "percentiles2": {
        "total": "168",
        "ok": "-",
        "ko": "168"
    },
    "percentiles3": {
        "total": "173",
        "ok": "-",
        "ko": "173"
    },
    "percentiles4": {
        "total": "195",
        "ok": "-",
        "ko": "195"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
