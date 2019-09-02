AIMS Data Platform API
=====================

The Austrlian Institute of Marine Science (AIMS) provides the __AIMS Data Platform API__ for access to AIMS data.

Available Data Sets
-------------------

The __AIMS Data Platform API__ is a *REST API* providing *JSON* formatted data.  The __AIMS Data Platform API__ should be queried using the Digital Object Identifier ([DOI](https://doi.org)) of the desired dataset.  At this time available datasets are:

Dataset                  | DOI                    | Query Filters                  | Metadata
-------------------------|------------------------|--------------------------------|-------------------------------------------------------------------------
Weather                  | 10.25845/5c09bf93f315d | [Filters](weather)             | [AIMS Weather](https://doi.org/10.25845/5c09bf93f315d){:target="_blank"}
Temperature Loggers      | 10.25845/5b4eb0f9bb848 | [Filters](temperature-loggers) | [AIMS Temperature Loggers](https://doi.org/10.25845/5b4eb0f9bb848){:target="_blank"}

Available Clients
-----------------

At this time there is only one client specifically made for __AIMS Data Platform API__ however any *REST* client will work.

Platform | Client
---------|--------------------------------------------------------------------
R        | [AIMS Data Platform R Client](http://aims.github.io/data-platform-r)


AIMS Data Platform API Key
-------------------------
__AIMS Data Platform API__ requires an *API Key* for requests to succeed.  The *API Key* should be added to every `HTTP` request as an `X-Api-Key` header, keys can be obtained from the [key request page](key-request).

Example of the `X-Api-Key` header using curl:

```
curl -H "x-api-key: xxxxx" "https://api.aims.gov.au/data/v1.0/10.25845/5c09bf93f315d/data?site-name=Davies%20Reef&size=10"
```

Documentation
-------------

Detailed information about the __AIMS Data Platform API__ urls and formats can be found in the Swagger documentation available [here](swagger).
                                                                                 
