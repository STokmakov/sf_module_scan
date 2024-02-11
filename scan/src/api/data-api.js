import {instance} from "./api";

 

export const dataAPI = {
    
    getGeneralData(searchParametrs) {
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

        return instance.post(`objectsearch/histograms`, config).then((res) => {
            console.log(res);
            console.log("Account info is received successfully");
            return res;
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