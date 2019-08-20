AIMS DataPlatform API
=====================

The Austrlian Institute of Marine Science (AIMS) provides the __AIMS DataPlatform API__ for access to AIMS data.

Available Data Sets
-------------------

The __AIMS DataPlatform API__ is a *REST API* providing *JSON* formatted data.  The __AIMS DataPlatform API__ should be queried using the Digital Object Identifier ([DOI](https://doi.org)) of the desired data set.  At this time available data sets are:

Data Set                 | DOI                    | Documentation                                   | Resolve DOI
-------------------------|------------------------|-------------------------------------------------|-------------------------------------------------------------------------
AIMS Weather             | 10.25845/5c09bf93f315d | [AIMS Weather](weather)                         | [AIMS Weather](https://doi.org/10.25845/5c09bf93f315d){:target="_blank"}
AIMS Temperature Loggers | 10.25845/5b4eb0f9bb848 | [AIMS Temperature Loggers](temperature-loggers) | [AIMS Temperature Loggers](https://doi.org/10.25845/5b4eb0f9bb848){:target="_blank"}

Available Clients
-----------------

At this time there is only one client specifically made for __AIMS DataPlatform API__ however any *REST* client will work.

Platform | Client
---------|--------------------------------------------------------------------
R        | [AIMS DataPlatform R Client](http://aims.github.io/data-platform-r)


AIMS DataPlatform API Key
-------------------------
__AIMS DataPlatform API__ requires an *API Key* for requests to succeed.  The *API Key* should be added to every `HTTP` request as an `X-Api-Key` header, keys can be obtained from the [key request page](key-request).

Example of the `X-ApiKey` header using curl:

```
curl -H "x-api-key: xxxxx" "https://api.aims.gov.au/data/v1.0/10.25845/5c09bf93f315d/data?site-name=Davies%20Reef&size=10"
```

Documentation
-------------

Detailed information about the __AIMS DataPlatform API__ urls and formats can be found in the Swagger documentation available [here](swagger).
                                                                                 
