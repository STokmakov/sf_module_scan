import {instance} from "./api";

 

export const dataAPI = {
    
    getGeneralData(token, inn, tonality, documentCount, startDate, endDate, completeness, businessContext, mainRole, riskFactors, technicalNews, announcements, newsDigests) {
        const config = {
            headers: { Authorization: `Bearer ${token}`},
        };
        const bodyParameters = {
            
                "issueDateInterval": {
                  "startDate": "2019-01-01T00:00:00+03:00",
                  "endDate": "2023-08-31T23:59:59+03:00"
                },
                "searchContext": {
                  "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                      {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": 7710137066,
                        "maxFullness": true,
                        "inBusinessNews": null
                      }
                    ],
                    "onlyMainRole": true,
                    "tonality": "any",
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
                  "excludeTechNews": true,
                  "excludeAnnouncements": true,
                  "excludeDigests": true
                },
                "similarMode": "duplicates",
                "limit": 5,
                "sortType": "sourceInfluence",
                "sortDirectionType": "desc",
                "intervalType": "month",
                "histogramTypes": [
                  "totalDocuments",
                  "riskFactors"
                ]
              
            };


        return instance.post(`objectsearch/histograms`, 
        bodyParameters,
        config
        ).then((res) => {
            console.log(res.data);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },


      getData(token, inn, tonality, documentCount, startDate, endDate, completeness, businessContext, mainRole, riskFactors, technicalNews, announcements, newsDigests) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const bodyParameters = {
            
                "issueDateInterval": {
                  "startDate": "2019-01-01T00:00:00+03:00",
                  "endDate": "2023-08-31T23:59:59+03:00"
                },
                "searchContext": {
                  "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                      {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": 7710137066,
                        "maxFullness": true,
                        "inBusinessNews": null
                      }
                    ],
                    "onlyMainRole": true,
                    "tonality": "any",
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
                  "excludeTechNews": true,
                  "excludeAnnouncements": true,
                  "excludeDigests": true
                },
                "similarMode": "duplicates",
                "limit": 5,
                "sortType": "sourceInfluence",
                "sortDirectionType": "desc",
                "intervalType": "month",
                "histogramTypes": [
                  "totalDocuments",
                  "riskFactors"
                ]
              
            };
        return instance.post(`objectsearch`, bodyParameters,  config).then((res) => {
            console.log(res);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },

      getDetailData(token, arrForRequest) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const bodyParameters = { 
                "ids": arrForRequest
              
        };

        return instance.post(`objectsearch`, bodyParameters, config).then((res) => {
            console.log(res);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },

}