[Home](../index)

AIMS Temperature Loggers Dataset
=================================

Available query parameters for *AIMS Temperature Loggers* data set are:

Query Parameter | Parameter Name | Parameter Type | Parameter Values
--------------- | -------------- | -------------- | ----------------
Site name       | site-name      | string         | [List of Sites](sites)
Size            | size           | integer        | Integer values, default and maximum of 10000 rows returned per request
From Date       | from-date      | timestamp      | Date time string in form "YYYY-MM-DD hh:mm:ss"
Through Date    | thru-date      | timestamp      | Date time string in form "YYYY-MM-DD hh:mm:ss"
Min Longitude   | min-longitude  | longitude      | Longitude Decimal value
Max Longitude   | max-longitude  | longitude      | Longitude Decimal value
Min Latitude    | min-latitude   | latitude       | Latitude Decimal value
Max Latitude    | max-latitude   | latitude       | Latitude Decimal value

Examples usage of data request using query filter parameters with [R client](https://aims.github.io/data-platform-r):

```

> library(aimsdataplatform)
> getAllData('10.25845/5b4eb0f9bb848', filters=list(
    'site'='Bickerton Island',
    'from-date'='2018-01-01',
    'thru-date'='2018-01-07'))

```
