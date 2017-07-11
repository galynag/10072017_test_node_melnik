/**
 * Created by Galina on 10.07.2017.
 */
const express = require("express");
const favicon = require('serve-favicon');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const ObjectID = require('mongodb').ObjectID;
const ISODate = require('isodate');
const fs = require('fs');
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
});

let clubFacilities = [
    {
    "_id" : ObjectID("584eae360f80a0bf440e4d69"),
    "club_facility_id" : "29330b20-c070-11e6-a8cf-65fef1c91a7c",
    "club_activities_scheduling" : [
        {
            "activity_unique_id" : "794634c0-dd5d-11e6-a20a-d141e21d578c",
            "activity_id" : "cfcd3240-dd5c-11e6-a20a-d141e21d578c",
            "from" : ISODate("2017-01-18T12:00:00.628Z"),
            "to" : ISODate("2017-01-18T13:00:00.628Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1484697600,
            "repeat_start_dates" : [
                1484697600
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                3
            ],
            "repeat_interval" : 604800,
            "is_match_event" : "false",
            "max_booking_no" : 20,
            "event_description" : "",
            "event_color" : "#263238",
            "public_booking" : "true",
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : "true",
            "scheduler_summary" : "Weekly on Wednesday",
            "end_on" : "",
            "total_from_minutes" : 2160,
            "total_to_minutes" : 2220,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "dcbb2c90-dd5d-11e6-a20a-d141e21d578c",
            "activity_id" : "cfcd3240-dd5c-11e6-a20a-d141e21d578c",
            "from" : ISODate("2017-01-18T18:00:00.633Z"),
            "to" : ISODate("2017-01-18T19:00:00.633Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1484870400,
            "repeat_start_dates" : [
                1484870400
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                5
            ],
            "repeat_interval" : 604800,
            "is_match_event" : "false",
            "max_booking_no" : 20,
            "event_description" : "",
            "event_color" : "#263238",
            "public_booking" : "true",
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : "true",
            "scheduler_summary" : "Weekly on Friday",
            "end_on" : "",
            "total_from_minutes" : 2520,
            "total_to_minutes" : 2580,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "480ce690-f925-11e6-894e-975a3307e9db",
            "activity_id" : "ee823b70-f924-11e6-894e-975a3307e9db",
            "from" : ISODate("2017-02-22T19:00:00.423Z"),
            "to" : ISODate("2017-02-22T20:30:00.423Z"),
            "booking_events" : "",
            "staff_array" : [
                {
                    "staff_id" : "875fd690-f925-11e6-894e-975a3307e9db"
                }
            ],
            "start_on" : 1487721600,
            "repeat_start_dates" : [
                1487548800,
                1487721600
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                1,
                3
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#D500F9",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni lunedì e mercoledì, dalle 20:00 alle 21:30, a partire dal 22/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2580,
            "total_to_minutes" : 2670,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "fbd1da80-f9e5-11e6-a916-c5e167e660ab",
            "activity_id" : "b506a5b0-f9d9-11e6-a916-c5e167e660ab",
            "from" : ISODate("2017-02-23T16:00:00.235Z"),
            "to" : ISODate("2017-02-23T17:00:00.235Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1487808000,
            "repeat_start_dates" : [
                1488326400
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                3
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#FFCDD2",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni mercoledì, dalle 17:00 alle 18:00, a partire dal 23/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2400,
            "total_to_minutes" : 2460,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "6691b690-fd08-11e6-bf4c-9598933605be",
            "activity_id" : "f4195c80-fd07-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-02-27T19:30:00.288Z"),
            "to" : ISODate("2017-02-27T21:00:00.288Z"),
            "booking_events" : "",
            "staff_array" : [
                {
                    "staff_id" : "D"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : "n"
                },
                {
                    "staff_id" : "z"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : " "
                },
                {
                    "staff_id" : "c"
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : "s"
                },
                {
                    "staff_id" : "s"
                },
                {
                    "staff_id" : "i"
                },
                {
                    "staff_id" : "c"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : " "
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "i"
                },
                {
                    "staff_id" : "v"
                },
                {
                    "staff_id" : "e"
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "o"
                },
                {
                    "staff_id" : " "
                },
                {
                    "staff_id" : "2"
                }
            ],
            "start_on" : 1488153600,
            "repeat_start_dates" : [
                1488240000
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                2
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#E91E63",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni martedì, dalle 20:30 alle 22:00, a partire dal 27/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2610,
            "total_to_minutes" : 2700,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "58c59470-fd0b-11e6-bf4c-9598933605be",
            "activity_id" : "06c0d5a0-fd0a-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-02-27T15:00:00.662Z"),
            "to" : ISODate("2017-02-27T16:00:00.662Z"),
            "booking_events" : "",
            "staff_array" : [
                {
                    "staff_id" : "D"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : "n"
                },
                {
                    "staff_id" : "z"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : " "
                },
                {
                    "staff_id" : "c"
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : "s"
                },
                {
                    "staff_id" : "s"
                },
                {
                    "staff_id" : "i"
                },
                {
                    "staff_id" : "c"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : " "
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "i"
                },
                {
                    "staff_id" : "v"
                },
                {
                    "staff_id" : "e"
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : "o"
                },
                {
                    "staff_id" : " "
                },
                {
                    "staff_id" : "2"
                }
            ],
            "start_on" : 1488153600,
            "repeat_start_dates" : [
                1488240000
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                2
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#EC407A",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni martedì, dalle 16:00 alle 17:00, a partire dal 27/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2340,
            "total_to_minutes" : 2400,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "acd4d7e0-fe8e-11e6-bf4c-9598933605be",
            "activity_id" : "55a29bb0-fe8e-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-01T19:00:00.421Z"),
            "to" : ISODate("2017-03-01T20:00:00.421Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488326400,
            "repeat_start_dates" : [
                1488499200
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                5
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 10,
            "event_description" : "",
            "event_color" : "#D50000",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni venerdì, dalle 20:00 alle 21:00, a partire dal 01/03/2017",
            "end_on" : "",
            "total_from_minutes" : 2580,
            "total_to_minutes" : 2640,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "14774cc0-fe8f-11e6-bf4c-9598933605be",
            "activity_id" : "d5f604a0-fe8e-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-01T20:00:00.233Z"),
            "to" : ISODate("2017-03-01T21:00:00.233Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488326400,
            "repeat_start_dates" : [
                1488499200
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                5
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 10,
            "event_description" : "",
            "event_color" : "#D50000",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni venerdì, dalle 21:00 alle 22:00, a partire dal 01/03/2017",
            "end_on" : "",
            "total_from_minutes" : 2640,
            "total_to_minutes" : 2700,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "120e22e0-f9d7-11e6-a916-c5e167e660ab",
            "activity_id" : "786e9eb0-f9d3-11e6-a916-c5e167e660ab",
            "from" : ISODate("2017-03-01T16:00:00.800Z"),
            "to" : ISODate("2017-03-01T17:00:00.800Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1487808000,
            "repeat_start_dates" : [
                1488240000
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                2
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#C51162",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni martedì, dalle 17:00 alle 18:00, a partire dal 23/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2400,
            "total_to_minutes" : 2460,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "2dca6250-fe91-11e6-bf4c-9598933605be",
            "activity_id" : "bc0cf3d0-fe90-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-01T16:00:00.866Z"),
            "to" : ISODate("2017-03-01T17:00:00.866Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488326400,
            "repeat_start_dates" : [
                1488499200
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                5
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#00C853",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni venerdì, dalle 17:00 alle 18:00, a partire dal 01/03/2017",
            "end_on" : "",
            "total_from_minutes" : 2400,
            "total_to_minutes" : 2460,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "44cc5700-f924-11e6-894e-975a3307e9db",
            "activity_id" : "3f417ec0-f922-11e6-894e-975a3307e9db",
            "from" : ISODate("2017-03-02T17:00:00.041Z"),
            "to" : ISODate("2017-03-02T18:00:00.041Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1487721600,
            "repeat_start_dates" : [
                1487721600
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                3
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#FFCDD2",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni mercoledì, dalle 18:00 alle 19:00, a partire dal 22/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2460,
            "total_to_minutes" : 2520,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "2e2f4ec0-f9e8-11e6-a916-c5e167e660ab",
            "activity_id" : "7a1a7f50-f9e6-11e6-a916-c5e167e660ab",
            "from" : ISODate("2017-03-02T17:00:00.229Z"),
            "to" : ISODate("2017-03-02T18:00:00.229Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1487808000,
            "repeat_start_dates" : [
                1487635200,
                1487894400
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                2,
                5
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#FFCDD2",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni martedì e venerdì, dalle 18:00 alle 19:00, a partire dal 23/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2460,
            "total_to_minutes" : 2520,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "e3e72c50-fd09-11e6-bf4c-9598933605be",
            "activity_id" : "284b8630-fd09-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-02T17:00:00.494Z"),
            "to" : ISODate("2017-03-02T18:00:00.494Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488153600,
            "repeat_start_dates" : [
                1488153600,
                1488412800
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                1,
                4
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#AA00FF",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni lunedì e giovedì, dalle 18:00 alle 19:00, a partire dal 27/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2460,
            "total_to_minutes" : 2520,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "0df7dea0-fd09-11e6-bf4c-9598933605be",
            "activity_id" : "85723940-fd08-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-02T16:00:00.688Z"),
            "to" : ISODate("2017-03-02T17:00:00.688Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488153600,
            "repeat_start_dates" : [
                1488153600,
                1488412800
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                1,
                4
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#AA00FF",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni lunedì e giovedì, dalle 17:00 alle 18:00, a partire dal 27/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2400,
            "total_to_minutes" : 2460,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "a19603a0-f9ec-11e6-a916-c5e167e660ab",
            "activity_id" : "1134fbc0-f9e9-11e6-a916-c5e167e660ab",
            "from" : ISODate("2017-03-02T18:00:00.557Z"),
            "to" : ISODate("2017-03-02T19:00:00.557Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1487808000,
            "repeat_start_dates" : [
                1488153600,
                1488326400
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                1,
                3
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#C51162",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni lunedì e mercoledì, dalle 19:00 alle 20:00, a partire dal 23/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2520,
            "total_to_minutes" : 2580,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "b1d20880-fd03-11e6-bf4c-9598933605be",
            "activity_id" : "d95aa5d0-fd01-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-02T18:00:00.793Z"),
            "to" : ISODate("2017-03-02T19:30:00.793Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488153600,
            "repeat_start_dates" : [
                1488240000,
                1488412800
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                2,
                4
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#C51162",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni martedì e giovedì, dalle 19:00 alle 20:30, a partire dal 27/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2520,
            "total_to_minutes" : 2610,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "87ccd270-fd05-11e6-bf4c-9598933605be",
            "activity_id" : "ed851570-fd03-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-02T19:30:00.157Z"),
            "to" : ISODate("2017-03-02T21:00:00.157Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488153600,
            "repeat_start_dates" : [
                1488412800
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                4
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 15,
            "event_description" : "",
            "event_color" : "#C51162",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni giovedì, dalle 20:30 alle 22:00, a partire dal 27/02/2017",
            "end_on" : "",
            "total_from_minutes" : 2610,
            "total_to_minutes" : 2700,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "cb4f5110-0405-11e7-bb7b-71668e41596f",
            "activity_id" : "973e3ef0-ff59-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-08T12:00:00.941Z"),
            "to" : ISODate("2017-03-08T13:00:00.941Z"),
            "booking_events" : "",
            "staff_array" : [
                {
                    "staff_id" : "F"
                },
                {
                    "staff_id" : "u"
                },
                {
                    "staff_id" : "n"
                },
                {
                    "staff_id" : "c"
                },
                {
                    "staff_id" : "t"
                },
                {
                    "staff_id" : "i"
                },
                {
                    "staff_id" : "o"
                },
                {
                    "staff_id" : "n"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : "l"
                },
                {
                    "staff_id" : " "
                },
                {
                    "staff_id" : "T"
                },
                {
                    "staff_id" : "r"
                },
                {
                    "staff_id" : "a"
                },
                {
                    "staff_id" : "i"
                },
                {
                    "staff_id" : "n"
                },
                {
                    "staff_id" : "i"
                },
                {
                    "staff_id" : "n"
                },
                {
                    "staff_id" : "g"
                }
            ],
            "start_on" : 1488931200,
            "repeat_start_dates" : [
                1489449600
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                2
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 30,
            "event_description" : "",
            "event_color" : "#00B0FF",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni martedì, dalle 13:00 alle 14:00, a partire dal 08/03/2017",
            "end_on" : "",
            "total_from_minutes" : 2160,
            "total_to_minutes" : 2220,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "33fca970-040a-11e7-bb7b-71668e41596f",
            "activity_id" : "055a2c40-0406-11e7-bb7b-71668e41596f",
            "from" : ISODate("2017-03-08T12:00:00.566Z"),
            "to" : ISODate("2017-03-08T13:00:00.566Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488931200,
            "repeat_start_dates" : [
                1489017600
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                4
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 30,
            "event_description" : "",
            "event_color" : "#FB8C00",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni giovedì, dalle 13:00 alle 14:00, a partire dal 08/03/2017",
            "end_on" : "",
            "total_from_minutes" : 2160,
            "total_to_minutes" : 2220,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "4b455af0-040a-11e7-bb7b-71668e41596f",
            "activity_id" : "973e3ef0-ff59-11e6-bf4c-9598933605be",
            "from" : ISODate("2017-03-08T12:00:00.486Z"),
            "to" : ISODate("2017-03-08T13:00:00.486Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488931200,
            "repeat_start_dates" : [
                1489104000
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                5
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 30,
            "event_description" : "",
            "event_color" : "#00B0FF",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni venerdì, dalle 13:00 alle 14:00, a partire dal 08/03/2017",
            "end_on" : "",
            "total_from_minutes" : 2160,
            "total_to_minutes" : 2220,
            "booking_till_hours" : 0.0
        },
        {
            "activity_unique_id" : "63876090-040a-11e7-bb7b-71668e41596f",
            "activity_id" : "8f10d790-0406-11e7-bb7b-71668e41596f",
            "from" : ISODate("2017-03-08T10:00:00.339Z"),
            "to" : ISODate("2017-03-08T11:30:00.339Z"),
            "booking_events" : "",
            "staff_array" : [],
            "start_on" : 1488931200,
            "repeat_start_dates" : [
                1489190400
            ],
            "repeats" : "Weekly",
            "repeats_every" : 1,
            "repeat_year" : "*",
            "repeat_month" : "*",
            "repeat_day" : "*",
            "repeat_weekday" : [
                6
            ],
            "repeat_interval" : 604800,
            "is_match_event" : false,
            "max_booking_no" : 30,
            "event_description" : "",
            "event_color" : "#B3E5FC",
            "public_booking" : false,
            "booking_ahead_hours" : 0,
            "cancel_ahead_hours" : 0,
            "show_activity_name" : true,
            "scheduler_summary" : "Ogni sabato, dalle 11:00 alle 12:30, a partire dal 08/03/2017",
            "end_on" : "",
            "total_from_minutes" : 2040,
            "total_to_minutes" : 2130,
            "booking_till_hours" : 0.0
        }
    ],
    "createdAt" : ISODate("2016-12-12T14:03:34.060Z"),
    "updatedAt" : ISODate("2017-03-08T14:20:32.414Z")
},
    {
        "_id" : ObjectID("5853bfc8cf5375cd2b1ac565"),
        "club_facility_id" : "442b0260-c378-11e6-849f-2d3cce21cca1",
        "club_activities_scheduling" : [
            {
                "activity_unique_id" : "2ec154a0-c379-11e6-849f-2d3cce21cca1",
                "activity_id" : "fddb97e0-c2a8-11e6-849f-2d3cce21cca1",
                "from" : ISODate("2016-12-16T06:30:00.795Z"),
                "to" : ISODate("2016-12-16T21:30:00.795Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1481846400,
                "repeat_start_dates" : [
                    1481846400
                ],
                "repeats" : "Daily",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : "*",
                "repeat_interval" : 86400,
                "is_match_event" : "false",
                "max_booking_no" : 4,
                "event_description" : "Tennis allenamento e partita",
                "event_color" : "orange",
                "public_booking" : "false",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 0,
                "show_activity_name" : "false",
                "scheduler_summary" : "Daily",
                "end_on" : "",
                "total_from_minutes" : 1830,
                "total_to_minutes" : 2730,
                "booking_till_hours" : 0.0
            }
        ],
        "createdAt" : ISODate("2016-12-16T10:19:52.434Z"),
        "updatedAt" : ISODate("2016-12-16T10:32:39.738Z")
    },
    {
        "_id" : ObjectID("581e06fdedf132b77cb88687"),
        "club_facility_id" : "b2528c40-a334-11e6-9343-e5536bc41c79",
        "club_activities_scheduling" : [
            {
                "activity_unique_id" : "e0ee29d0-a373-11e6-8573-11802063503f",
                "activity_id" : "b08494f0-a332-11e6-9343-e5536bc41c79",
                "from" : ISODate("2016-11-05T09:00:00.639Z"),
                "to" : ISODate("2016-11-05T10:15:00.639Z"),
                "booking_events" : "",
                "staff_array" : [
                    {
                        "staff_id" : "3c938b50-a337-11e6-9343-e5536bc41c79"
                    }
                ],
                "start_on" : 1478304000,
                "repeat_start_dates" : [
                    1478476800
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 15,
                "event_description" : "",
                "event_color" : "#8eeb54",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 24,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 1980,
                "total_to_minutes" : 2055,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "4b505af0-a374-11e6-8573-11802063503f",
                "activity_id" : "8a99e5a0-a333-11e6-9343-e5536bc41c79",
                "from" : ISODate("2016-11-05T18:30:00.990Z"),
                "to" : ISODate("2016-11-05T19:45:00.990Z"),
                "booking_events" : "",
                "staff_array" : [
                    {
                        "staff_id" : "82c9fb30-a338-11e6-9343-e5536bc41c79"
                    }
                ],
                "start_on" : 1478304000,
                "repeat_start_dates" : [
                    1478563200
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 15,
                "event_description" : "",
                "event_color" : "#3bd115",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 24,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2550,
                "total_to_minutes" : 2625,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "b63fff00-a374-11e6-8573-11802063503f",
                "activity_id" : "40fdc010-a333-11e6-9343-e5536bc41c79",
                "from" : ISODate("2016-11-05T18:45:00.480Z"),
                "to" : ISODate("2016-11-05T20:00:00.480Z"),
                "booking_events" : "",
                "staff_array" : [
                    {
                        "staff_id" : "62780e30-a338-11e6-9343-e5536bc41c79"
                    }
                ],
                "start_on" : 1478304000,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 15,
                "event_description" : "",
                "event_color" : "#58dbed",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 24,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2565,
                "total_to_minutes" : 2640,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "6ccec490-a375-11e6-8573-11802063503f",
                "activity_id" : "a52713c0-a333-11e6-9343-e5536bc41c79",
                "from" : ISODate("2016-11-05T18:30:00.680Z"),
                "to" : ISODate("2016-11-05T20:00:00.680Z"),
                "booking_events" : "",
                "staff_array" : [
                    {
                        "staff_id" : "c701ede0-a337-11e6-9343-e5536bc41c79"
                    }
                ],
                "start_on" : 1478304000,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 15,
                "event_description" : "",
                "event_color" : "#5c90d2",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 24,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2550,
                "total_to_minutes" : 2640,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "81de00d0-a375-11e6-8573-11802063503f",
                "activity_id" : "8a99e5a0-a333-11e6-9343-e5536bc41c79",
                "from" : ISODate("2016-11-05T18:30:00.912Z"),
                "to" : ISODate("2016-11-05T19:45:00.912Z"),
                "booking_events" : "",
                "staff_array" : [
                    {
                        "staff_id" : "82c9fb30-a338-11e6-9343-e5536bc41c79"
                    }
                ],
                "start_on" : 1478304000,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 15,
                "event_description" : "",
                "event_color" : "#3bd115",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 24,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 2550,
                "total_to_minutes" : 2625,
                "booking_till_hours" : 0.0
            }
        ],
        "createdAt" : ISODate("2016-11-05T16:21:17.521Z"),
        "updatedAt" : ISODate("2016-11-05T16:32:57.742Z")
    },
    {
        "_id" : ObjectID("584f26800f80a0bf440e4d6d"),
        "club_facility_id" : "4b77ab50-c0bb-11e6-a8cf-65fef1c91a7c",
        "club_activities_scheduling" : [
            {
                "activity_unique_id" : "782707e0-c0bb-11e6-a8cf-65fef1c91a7c",
                "activity_id" : "c66f1ec0-c0ba-11e6-a8cf-65fef1c91a7c",
                "from" : ISODate("2016-12-27T18:00:00.954Z"),
                "to" : ISODate("2016-12-27T19:00:00.954Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1481500800,
                "repeat_start_dates" : [
                    1481500800
                ],
                "repeats" : "Daily",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : "*",
                "repeat_interval" : 86400,
                "is_match_event" : "true",
                "max_booking_no" : 2,
                "event_description" : "",
                "event_color" : "#D84315",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 0,
                "show_activity_name" : "true",
                "scheduler_summary" : "Daily",
                "end_on" : "",
                "total_from_minutes" : 2520,
                "total_to_minutes" : 2580,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "93ac5940-cc4e-11e6-849f-2d3cce21cca1",
                "activity_id" : "c66f1ec0-c0ba-11e6-a8cf-65fef1c91a7c",
                "from" : ISODate("2016-12-27T19:00:00.278Z"),
                "to" : ISODate("2016-12-27T20:00:00.278Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1481500800,
                "repeat_start_dates" : [
                    1481500800
                ],
                "repeats" : "Daily",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : "*",
                "repeat_interval" : 86400,
                "is_match_event" : "true",
                "max_booking_no" : 2,
                "event_description" : "",
                "event_color" : "#D84315",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 0,
                "show_activity_name" : "true",
                "scheduler_summary" : "Daily",
                "end_on" : "",
                "total_from_minutes" : 2580,
                "total_to_minutes" : 2640,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "b7a75110-cc4e-11e6-849f-2d3cce21cca1",
                "activity_id" : "c66f1ec0-c0ba-11e6-a8cf-65fef1c91a7c",
                "from" : ISODate("2016-12-27T20:00:00.325Z"),
                "to" : ISODate("2016-12-27T21:00:00.325Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1481500800,
                "repeat_start_dates" : [
                    1481500800
                ],
                "repeats" : "Daily",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : "*",
                "repeat_interval" : 86400,
                "is_match_event" : "true",
                "max_booking_no" : 2,
                "event_description" : "",
                "event_color" : "#D84315",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 0,
                "show_activity_name" : "true",
                "scheduler_summary" : "Daily",
                "end_on" : "",
                "total_from_minutes" : 2640,
                "total_to_minutes" : 2700,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "c1d7f590-cc4e-11e6-849f-2d3cce21cca1",
                "activity_id" : "c66f1ec0-c0ba-11e6-a8cf-65fef1c91a7c",
                "from" : ISODate("2016-12-27T17:00:00.426Z"),
                "to" : ISODate("2016-12-27T18:00:00.426Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1481500800,
                "repeat_start_dates" : [
                    1481500800
                ],
                "repeats" : "Daily",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : "*",
                "repeat_interval" : 86400,
                "is_match_event" : "true",
                "max_booking_no" : 2,
                "event_description" : "",
                "event_color" : "#D84315",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 0,
                "show_activity_name" : "true",
                "scheduler_summary" : "Daily",
                "end_on" : "",
                "total_from_minutes" : 2460,
                "total_to_minutes" : 2520,
                "booking_till_hours" : 0.0
            }
        ],
        "createdAt" : ISODate("2016-12-12T22:36:48.870Z"),
        "updatedAt" : ISODate("2016-12-27T16:08:51.312Z")
    },
    {
        "_id" : ObjectID("5823350878d1383009ac430c"),
        "club_facility_id" : "6ba989d0-a5b7-11e6-87d4-0763f85bc820",
        "club_activities_scheduling" : [
            {
                "activity_unique_id" : "42f26ba0-a68a-11e6-96fe-71703ae76b7f",
                "activity_id" : "dfb6d460-a5ba-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:00:00.633Z"),
                "to" : ISODate("2016-11-09T08:45:00.633Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#5cc4d2",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 1920,
                "total_to_minutes" : 1965,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "64b797b0-a68a-11e6-96fe-71703ae76b7f",
                "activity_id" : "dfb6d460-a5ba-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:00:00.285Z"),
                "to" : ISODate("2016-11-09T08:45:00.285Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#5cc4d2",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 1920,
                "total_to_minutes" : 1965,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "6d9185d0-a68a-11e6-96fe-71703ae76b7f",
                "activity_id" : "dfb6d460-a5ba-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:00:00.146Z"),
                "to" : ISODate("2016-11-09T08:45:00.146Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#5cc4d2",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 1920,
                "total_to_minutes" : 1965,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "a8e16420-a68a-11e6-96fe-71703ae76b7f",
                "activity_id" : "07ff5460-a5bb-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:00:00.205Z"),
                "to" : ISODate("2016-11-09T09:00:00.205Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#faf7b1",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 1920,
                "total_to_minutes" : 1980,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "c9d165e0-a68a-11e6-96fe-71703ae76b7f",
                "activity_id" : "07ff5460-a5bb-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:00:00.898Z"),
                "to" : ISODate("2016-11-09T09:00:00.898Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#faf7b1",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 1920,
                "total_to_minutes" : 1980,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "4998bb70-a68b-11e6-96fe-71703ae76b7f",
                "activity_id" : "ebc224f0-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T05:45:00.954Z"),
                "to" : ISODate("2016-11-09T06:30:00.954Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#eb3117",
                "public_booking" : "false",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 1785,
                "total_to_minutes" : 1830,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "7f14bfb0-a68b-11e6-96fe-71703ae76b7f",
                "activity_id" : "015d9ba0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T05:45:00.014Z"),
                "to" : ISODate("2016-11-09T06:30:00.014Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#ed6e5c",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 1785,
                "total_to_minutes" : 1830,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "fbc05650-a68b-11e6-96fe-71703ae76b7f",
                "activity_id" : "42942aa0-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:45:00.809Z"),
                "to" : ISODate("2016-11-09T09:30:00.809Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#5cd3ed",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 1965,
                "total_to_minutes" : 2010,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "09ef5190-a68c-11e6-96fe-71703ae76b7f",
                "activity_id" : "42942aa0-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:45:00.999Z"),
                "to" : ISODate("2016-11-09T09:30:00.999Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#5cd3ed",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 1965,
                "total_to_minutes" : 2010,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "136a88c0-a68c-11e6-96fe-71703ae76b7f",
                "activity_id" : "42942aa0-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:45:00.904Z"),
                "to" : ISODate("2016-11-09T09:30:00.904Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#5cd3ed",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 1965,
                "total_to_minutes" : 2010,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "46eda330-a68c-11e6-96fe-71703ae76b7f",
                "activity_id" : "56e769e0-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T09:00:00.989Z"),
                "to" : ISODate("2016-11-09T10:00:00.989Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#fbfcbd",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 1980,
                "total_to_minutes" : 2040,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "5502fbf0-a68c-11e6-96fe-71703ae76b7f",
                "activity_id" : "56e769e0-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T09:00:00.757Z"),
                "to" : ISODate("2016-11-09T10:00:00.757Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#fbfcbd",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 1980,
                "total_to_minutes" : 2040,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "e7823040-a68c-11e6-96fe-71703ae76b7f",
                "activity_id" : "b025fa50-a68c-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T09:30:00.708Z"),
                "to" : ISODate("2016-11-09T10:30:00.708Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478908800
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    6
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f786ec",
                "public_booking" : "false",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Saturday",
                "end_on" : "",
                "total_from_minutes" : 2010,
                "total_to_minutes" : 2070,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "1c3bcee0-a68d-11e6-96fe-71703ae76b7f",
                "activity_id" : "28c2ab60-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T11:45:00.182Z"),
                "to" : ISODate("2016-11-09T12:45:00.182Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#db60cf",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 2145,
                "total_to_minutes" : 2205,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "2ef00420-a68d-11e6-96fe-71703ae76b7f",
                "activity_id" : "28c2ab60-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T11:45:00.553Z"),
                "to" : ISODate("2016-11-09T12:45:00.553Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#db60cf",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2145,
                "total_to_minutes" : 2205,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "5904b8a0-a68d-11e6-96fe-71703ae76b7f",
                "activity_id" : "638b3140-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T11:45:00.586Z"),
                "to" : ISODate("2016-11-09T12:45:00.586Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#fae843",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2145,
                "total_to_minutes" : 2205,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "78817b50-a68d-11e6-96fe-71703ae76b7f",
                "activity_id" : "56e769e0-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T14:15:00.971Z"),
                "to" : ISODate("2016-11-09T15:15:00.971Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#fbfcbd",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 2295,
                "total_to_minutes" : 2355,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "935ec540-a68d-11e6-96fe-71703ae76b7f",
                "activity_id" : "28c2ab60-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:00:00.041Z"),
                "to" : ISODate("2016-11-09T17:45:00.041Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#db60cf",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2460,
                "total_to_minutes" : 2505,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "d28e27b0-a68d-11e6-96fe-71703ae76b7f",
                "activity_id" : "480f67f0-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:30:00.730Z"),
                "to" : ISODate("2016-11-09T18:30:00.730Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#fae41b",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 2490,
                "total_to_minutes" : 2550,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "f0290b00-a68d-11e6-96fe-71703ae76b7f",
                "activity_id" : "35bf72c0-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:45:00.716Z"),
                "to" : ISODate("2016-11-09T18:45:00.716Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#e3cf19",
                "public_booking" : "false",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 2505,
                "total_to_minutes" : 2565,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "0ae4c330-a68e-11e6-96fe-71703ae76b7f",
                "activity_id" : "638b3140-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:45:00.566Z"),
                "to" : ISODate("2016-11-09T18:30:00.566Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#fae843",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2505,
                "total_to_minutes" : 2550,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "a43fa4a0-a68e-11e6-96fe-71703ae76b7f",
                "activity_id" : "7d9e44f0-a68e-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T17:00:00.867Z"),
                "to" : ISODate("2016-11-09T18:00:00.867Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#ea5aed",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2460,
                "total_to_minutes" : 2520,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "c3f37ce0-a68e-11e6-96fe-71703ae76b7f",
                "activity_id" : "6b370a30-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:45:00.045Z"),
                "to" : ISODate("2016-11-09T18:30:00.045Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#ce49d1",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2505,
                "total_to_minutes" : 2550,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "d834bac0-a68e-11e6-96fe-71703ae76b7f",
                "activity_id" : "6b370a30-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T18:45:00.026Z"),
                "to" : ISODate("2016-11-09T19:30:00.026Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#ce49d1",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 2565,
                "total_to_minutes" : 2610,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "02084790-a68f-11e6-96fe-71703ae76b7f",
                "activity_id" : "7ea0acc0-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T18:30:00.206Z"),
                "to" : ISODate("2016-11-09T19:15:00.206Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 1,
                "event_description" : "",
                "event_color" : "#eef211",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2550,
                "total_to_minutes" : 2595,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "0eb64820-a68f-11e6-96fe-71703ae76b7f",
                "activity_id" : "7ea0acc0-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T18:30:00.477Z"),
                "to" : ISODate("2016-11-09T19:15:00.477Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 1,
                "event_description" : "",
                "event_color" : "#eef211",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2550,
                "total_to_minutes" : 2595,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "52e6a440-a68f-11e6-96fe-71703ae76b7f",
                "activity_id" : "992d3ea0-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T18:00:00.878Z"),
                "to" : ISODate("2016-11-09T19:00:00.878Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f6fa2f",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2520,
                "total_to_minutes" : 2580,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "854ba480-a68f-11e6-96fe-71703ae76b7f",
                "activity_id" : "b909ad80-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T19:15:00.427Z"),
                "to" : ISODate("2016-11-09T20:00:00.427Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#e7eb2f",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2595,
                "total_to_minutes" : 2640,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "9085a2b0-a68f-11e6-96fe-71703ae76b7f",
                "activity_id" : "b909ad80-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T19:15:00.269Z"),
                "to" : ISODate("2016-11-09T20:00:00.269Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#e7eb2f",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2595,
                "total_to_minutes" : 2640,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "bd577b60-a68f-11e6-96fe-71703ae76b7f",
                "activity_id" : "d8e61c60-a5bd-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T19:00:00.454Z"),
                "to" : ISODate("2016-11-09T19:30:00.454Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#d770e0",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2580,
                "total_to_minutes" : 2610,
                "booking_till_hours" : 0.0
            }
        ],
        "createdAt" : ISODate("2016-11-09T14:39:04.036Z"),
        "updatedAt" : ISODate("2016-11-09T15:18:16.892Z")
    },
    {
        "_id" : ObjectID("5823430978d1383009ac430d"),
        "club_facility_id" : "46dc74f0-a5b7-11e6-87d4-0763f85bc820",
        "club_activities_scheduling" : [
            {
                "activity_unique_id" : "9c46cae0-a692-11e6-96fe-71703ae76b7f",
                "activity_id" : "a35d1100-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T17:15:00.149Z"),
                "to" : ISODate("2016-11-09T18:15:00.149Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f2de24",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 2475,
                "total_to_minutes" : 2535,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "07dee3f0-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "e04c1f60-a692-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T18:15:00.998Z"),
                "to" : ISODate("2016-11-09T19:15:00.998Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#e6f257",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 2535,
                "total_to_minutes" : 2595,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "2e7dd2a0-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "b70f7c60-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T19:15:00.788Z"),
                "to" : ISODate("2016-11-09T20:15:00.788Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479081600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    1
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#9bbae8",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Monday",
                "end_on" : "",
                "total_from_minutes" : 2595,
                "total_to_minutes" : 2655,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "5013ff70-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T11:45:00.125Z"),
                "to" : ISODate("2016-11-09T12:45:00.125Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#44eb7d",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2145,
                "total_to_minutes" : 2205,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "5d6ee1d0-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T16:00:00.550Z"),
                "to" : ISODate("2016-11-09T16:45:00.550Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#44eb7d",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2400,
                "total_to_minutes" : 2445,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "6bd17030-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:30:00.674Z"),
                "to" : ISODate("2016-11-09T18:15:00.674Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#44eb7d",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2490,
                "total_to_minutes" : 2535,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "9a93a730-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "73d4f1f0-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T19:15:00.120Z"),
                "to" : ISODate("2016-11-09T20:00:00.120Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#45d676",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2595,
                "total_to_minutes" : 2640,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "d127d230-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "57949590-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T18:15:00.395Z"),
                "to" : ISODate("2016-11-09T19:15:00.395Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f7a545",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2535,
                "total_to_minutes" : 2595,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "e3e55640-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "57949590-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T18:15:00.122Z"),
                "to" : ISODate("2016-11-09T19:15:00.122Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f7a545",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 2535,
                "total_to_minutes" : 2595,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "f6b550e0-a693-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T11:45:00.621Z"),
                "to" : ISODate("2016-11-09T12:45:00.621Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#44eb7d",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 2145,
                "total_to_minutes" : 2205,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "0598f620-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T16:45:00.673Z"),
                "to" : ISODate("2016-11-09T17:30:00.673Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#44eb7d",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 2445,
                "total_to_minutes" : 2490,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "0bd492b0-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:30:00.136Z"),
                "to" : ISODate("2016-11-09T18:15:00.136Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478822400
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    5
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#44eb7d",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Friday",
                "end_on" : "",
                "total_from_minutes" : 2490,
                "total_to_minutes" : 2535,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "1f614da0-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "b70f7c60-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T08:30:00.933Z"),
                "to" : ISODate("2016-11-09T09:30:00.933Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478908800
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    6
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#9bbae8",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Saturday",
                "end_on" : "",
                "total_from_minutes" : 1950,
                "total_to_minutes" : 2010,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "2b351ad0-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "b70f7c60-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T19:15:00.781Z"),
                "to" : ISODate("2016-11-09T20:15:00.781Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#9bbae8",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2595,
                "total_to_minutes" : 2655,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "42980b10-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "57949590-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T11:45:00.996Z"),
                "to" : ISODate("2016-11-09T12:45:00.996Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f7a545",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2145,
                "total_to_minutes" : 2205,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "5bdf99d0-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T17:00:00.420Z"),
                "to" : ISODate("2016-11-09T17:45:00.420Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#44eb7d",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2460,
                "total_to_minutes" : 2505,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "6bb3b990-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "73d4f1f0-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T17:45:00.977Z"),
                "to" : ISODate("2016-11-09T18:30:00.977Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#45d676",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2505,
                "total_to_minutes" : 2550,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "99d78db0-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "852b1dd0-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T18:30:00.386Z"),
                "to" : ISODate("2016-11-09T19:15:00.386Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478649600
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    3
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#eb8f23",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Wednesday",
                "end_on" : "",
                "total_from_minutes" : 2550,
                "total_to_minutes" : 2595,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "abc76180-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "a35d1100-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T17:15:00.470Z"),
                "to" : ISODate("2016-11-09T18:15:00.470Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f2de24",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2475,
                "total_to_minutes" : 2535,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "b3c40f00-a694-11e6-96fe-71703ae76b7f",
                "activity_id" : "e04c1f60-a692-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T18:15:00.887Z"),
                "to" : ISODate("2016-11-09T19:15:00.887Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#e6f257",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2535,
                "total_to_minutes" : 2595,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "14eb9460-a695-11e6-96fe-71703ae76b7f",
                "activity_id" : "28c2ab60-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:00:00.382Z"),
                "to" : ISODate("2016-11-09T09:00:00.382Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#db7feb",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 1920,
                "total_to_minutes" : 1980,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "47c7c070-a695-11e6-96fe-71703ae76b7f",
                "activity_id" : "03f4d330-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:30:00.232Z"),
                "to" : ISODate("2016-11-09T09:30:00.232Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#ed42d2",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 1950,
                "total_to_minutes" : 2010,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "6a1aad90-a695-11e6-96fe-71703ae76b7f",
                "activity_id" : "638b3140-a5bc-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T09:30:00.790Z"),
                "to" : ISODate("2016-11-09T10:30:00.790Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f2f56e",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 2010,
                "total_to_minutes" : 2070,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "7ad6c6e0-a696-11e6-96fe-71703ae76b7f",
                "activity_id" : "30677b30-a688-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T13:00:00.368Z"),
                "to" : ISODate("2016-11-09T13:45:00.368Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#38e85e",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 2220,
                "total_to_minutes" : 2265,
                "booking_till_hours" : 0.0
            }
        ],
        "createdAt" : ISODate("2016-11-09T15:38:49.876Z"),
        "updatedAt" : ISODate("2016-11-09T16:06:31.767Z")
    },
    {
        "_id" : ObjectID("5823487b78d1383009ac430e"),
        "club_facility_id" : "540a53e0-a5b7-11e6-87d4-0763f85bc820",
        "club_activities_scheduling" : [
            {
                "activity_unique_id" : "db309170-a695-11e6-96fe-71703ae76b7f",
                "activity_id" : "57949590-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T07:45:00.211Z"),
                "to" : ISODate("2016-11-09T08:45:00.211Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f0a330",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 1905,
                "total_to_minutes" : 1965,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "efc8a1e0-a695-11e6-96fe-71703ae76b7f",
                "activity_id" : "57949590-a687-11e6-96fe-71703ae76b7f",
                "from" : ISODate("2016-11-09T08:00:00.088Z"),
                "to" : ISODate("2016-11-09T09:00:00.088Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#f0a330",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 1920,
                "total_to_minutes" : 1980,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "0e62f3d0-a696-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T08:45:00.417Z"),
                "to" : ISODate("2016-11-09T09:30:00.417Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#1fdb48",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 1965,
                "total_to_minutes" : 2010,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "24fa56b0-a696-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T05:45:00.338Z"),
                "to" : ISODate("2016-11-09T06:30:00.338Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1479168000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    2
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#1fdb48",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Tuesday",
                "end_on" : "",
                "total_from_minutes" : 1785,
                "total_to_minutes" : 1830,
                "booking_till_hours" : 0.0
            },
            {
                "activity_unique_id" : "2e9cc4f0-a696-11e6-96fe-71703ae76b7f",
                "activity_id" : "3936c9c0-a5be-11e6-87d4-0763f85bc820",
                "from" : ISODate("2016-11-09T05:45:00.513Z"),
                "to" : ISODate("2016-11-09T06:30:00.513Z"),
                "booking_events" : "",
                "staff_array" : [],
                "start_on" : 1478649600,
                "repeat_start_dates" : [
                    1478736000
                ],
                "repeats" : "Weekly",
                "repeats_every" : 1,
                "repeat_year" : "*",
                "repeat_month" : "*",
                "repeat_day" : "*",
                "repeat_weekday" : [
                    4
                ],
                "repeat_interval" : 604800,
                "is_match_event" : "false",
                "max_booking_no" : 20,
                "event_description" : "",
                "event_color" : "#1fdb48",
                "public_booking" : "true",
                "booking_ahead_hours" : 0,
                "cancel_ahead_hours" : 12,
                "show_activity_name" : "true",
                "scheduler_summary" : "Weekly on Thursday",
                "end_on" : "",
                "total_from_minutes" : 1785,
                "total_to_minutes" : 1830,
                "booking_till_hours" : 0.0
            }
        ],
        "createdAt" : ISODate("2016-11-09T16:02:03.917Z"),
        "updatedAt" : ISODate("2016-11-09T16:04:23.887Z")
    }
]

MongoClient.connect( "mongodb://admin:123456qwe@ds147882.mlab.com:47882/sannacode", (err, db) => {
    if (err) return console.log('connect error',err);
    let club = db.collection('club_facility');
    club.insertMany(clubFacilities, (err,res)=>{
        if (err) return console.log(err);
        club.updateMany({club_activities_scheduling: {$exists:true}},{$push: {club_activities_scheduling : {test_booking_till_hours : 0}}});

            });
    });
    // club.find().toArray((err,res)=>{
    //     if (err) return console.log(err);
    //     console.log(res);
    //     db.close();
    // });






app.listen(3000);