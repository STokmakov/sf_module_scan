import {instance} from "./api";

 

export const dataAPI = {
    
    getGeneralData(token, inn, startDate, endDate, documentCount) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const  data = {
                "issueDateInterval": {
                // "startDate": `${startDate}`,
                "startDate": "2019-01-01T00:00:00+03:00",
                // "endDate": `${endDate}`
                "endDate": "2024-08-31T23:59:59+03:00"
                },
                "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                    {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        // "inn": `${inn}`,
                        "inn": "7710137066",
                        "maxFullness": true,
                        "inBusinessNews": null
                    }
                    ],
                    // "onlyMainRole": `${mainRole}`,
                    "onlyMainRole": true,
                    // "tonality": `${tonality}`,
                    "tonality": "any",
                    // "onlyWithRiskFactors": `${riskFactors}`,
                    "onlyWithRiskFactors": false,
                    "riskFactors": {
                      "and": [],
                      "or": [],
                      "not": []
                    },
                    "themes": {
                      "and": [],
                      "or": [],
                      "not": []
                    }
                },
                "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                }
                },
                "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
                },
                "attributeFilters": {
                // "excludeTechNews": `${technicalNews}`,
                "excludeTechNews": true,
                // "excludeAnnouncements": `${announcements}`,
                "excludeAnnouncements": true,
                // "excludeDigests": `${newsDigests}`
                "excludeDigests": true
                },
                "similarMode": "duplicates",
                // "limit": `${documentCount}`,
                "limit": 10,
                "sortType": "sourceInfluence",
                "sortDirectionType": "desc",
                "intervalType": "month",
                "histogramTypes": [
                "totalDocuments",
                "riskFactors"
                ]
            
           
        
        };

        return instance.post(`objectsearch/histograms`,{data}, config).then((res) => {
            console.log(config)
            console.log(res);
            console.log("Account info is received successfully");
            return res.data;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },


      getData(searchParametrs) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            data: {
                "issueDateInterval": {
                "startDate": `${searchParametrs.startDate}`,
                "endDate": `${searchParametrs.endDate}`
                },
                "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                    {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": `${searchParametrs.inn}`,
                        "maxFullness": true,
                        "inBusinessNews": null
                    }
                    ],
                    "onlyMainRole": `${searchParametrs.mainRole}`,
                    "tonality": `${searchParametrs.tonality}`,
                    "onlyWithRiskFactors": `${searchParametrs.riskFactors}`,
                    "riskFactors": {
                    "and": [],
                    "or": [],
                    "not": []
                    },
                    "themes": {
                    "and": [],
                    "or": [],
                    "not": []
                    }
                },
                "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                }
                },
                "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
                },
                "attributeFilters": {
                "excludeTechNews": `${searchParametrs.technicalNews}`,
                "excludeAnnouncements": `${searchParametrs.announcements}`,
                "excludeDigests": `${searchParametrs.newsDigests}`
                },
                "similarMode": "duplicates",
                "limit": `${searchParametrs.documentCount}`,
                "sortType": "sourceInfluence",
                "sortDirectionType": "desc",
                "intervalType": "month",
                "histogramTypes": [
                "totalDocuments",
                "riskFactors"
                ]
            },
        };

        return instance.post(`objectsearch`, config).then((res) => {
            console.log(res);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },

      getDetailData(searchParametrs) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            data: {
                "ids": arrForRequest
              },
        };

        return instance.post(`objectsearch`, config).then((res) => {
            console.log(res);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },

}