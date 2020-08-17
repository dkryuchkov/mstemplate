const _ = require("lodash");
const path = require('path');
const scriptName = path.basename(__filename);
const { ...utils
} = require('../../utils');
const { ...config
} = require('../../config');

const AND = true;
//config.config.defaults.QueryExpression.logicalOperatorCode === 'AND';

const headerTransform = require('./headerTransform');
const DataTransform = require("node-json-transform").DataTransform;

const map = {
    list: "input",
    item: {
        "QueryCustomerPartyListEBM": {
            "EBMHeader": "headers",
            "DataArea": {
                "Query": {
                    "QueryCriteria": {
                        "QueryExpression": {
                            "ValueExpression": "searchAttributes"
                        },
                        "SortElement": ""
                    }
                }
            }
        }
    },
    operate: [{
            run: (headers) => headerTransform(headers, {
                Target: {
                    ServiceName: "Search"
                },
                VerbCode: "Query"
            }),
            on: "QueryCustomerPartyListEBM.EBMHeader"
        },
        {
            run: () => config.config.defaults.SortElement,
            on: "QueryCustomerPartyListEBM.DataArea.Query.QueryCriteria.SortElement"
        },
        {
            run: (searchAttributes,context) => {
                searchAttributes.push({key: "IsBrandAgnostic", value: "N"});
                searchAttributes.push({key: "IsSearch", value: "N"});
                searchAttributes.push({key: "MatchScoreThreshold", value: context.minMatchThreshold});
                return DataTransform({
                list: searchAttributes
                }, QueryCriteriaMap).transform()
            },
            on: "QueryCustomerPartyListEBM.DataArea.Query.QueryCriteria.QueryExpression.ValueExpression"
        }
    ]
};

const QueryCriteriaMap = {
    list: "list",
    item: {
            "ElementPath": "key",
            "Value": "value"
    },
    operate: [{
        run: (value) => value,
        on: "ValueExpression.Value"
    }],
    each: (item, index, collection, list) => {
        item.QueryExpression = list && list.length ? DataTransform({
            list: AND ? list : [list[0]]
        }, QueryCriteriaMap).transform(AND ? null : list.slice(1))[0] : null;
        return item;
    }
};

const inputData = (data) => {
    data.headers.customer = JSON.parse(JSON.stringify(data));
    data = {
        input: [data]
    };
    return data;
};

module.exports = (json) => utils.removeNull(DataTransform(inputData(json), map).transform(json)[0]);

//console.log(JSON.stringify(require(`./${scriptName}`)(data)));