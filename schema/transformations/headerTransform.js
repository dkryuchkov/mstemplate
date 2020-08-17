const DataTransform = require("node-json-transform").DataTransform;
const { ...utils } = require('../../utils');
const { ...config} = require('../../config');

const map = {
    list: "headers",
    item: {
        "VerbCode": "",
        "Sender": {
            "ID": "application",
            "UserID": "user",
            "UserRole": "",
            "ESBHeaderExtension": ""
        },
        "Target": {
            "ID": "",
            "ServiceName": ""
        },
        "EBMTracking": {
            "ExecutionUnitID": "trackingid"
        }
    },
    operate: [{
        run: (item,context) => context.context.VerbCode,
            on: "VerbCode"
        },
        {
            run: () => config.config.defaults.EBMHeader.UserRole,
            on: "Sender.UserRole"
        },
        {
            run: () => config.config.defaults.EBMHeader.Target.ID,
            on: "Target.ID"
        },
        {
            run: (item,context) => context.context.Target.ServiceName,
            on: "Target.ServiceName"
        },
        {
            run: (headers,context) => DataTransform({
                list: [{
                        "Name": "Channel",
                        "Value": context.channel
                    },
                    {
                        "Name": "TargetUnit",
                        "Value": context.targetunit
                    },
                    {
                        "Name": "Brand",
                        "Value": context.brand
                    }
                ]
            }, ESBHeaderExtensionMap).transform(),
            on: "Sender.ESBHeaderExtension"
        }
    ]
};

const ESBHeaderExtensionMap = {
    list: "list",
    item: {
        "Name": "Name",
        "Value": "Value"
    }
};

module.exports = (headers,context) => { headers.context = context; return DataTransform({headers: [headers]}, map).transform(headers)[0];}
