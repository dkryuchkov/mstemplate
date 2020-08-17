var Modeler = require("../Modeler.js");
var className = 'TypeSyncType';

var TypeSyncType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncType: {
      type: "string",
      wsdlDefinition: {
        name: "SyncType",
        "xsd:attribute": [
          {
            name: "syncActionCode",
            type: "SyncActionCodeType",
            use: "optional",
            attribute: true
          },
          {
            name: "responseCode",
            type: "ResponseCodeType",
            use: "optional",
            attribute: true
          }
        ],
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    syncActionCode: {
      type: "TypeSyncActionCodeType",
      wsdlDefinition: {
        name: "syncActionCode",
        type: "SyncActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    responseCode: {
      type: "TypeResponseCodeType",
      wsdlDefinition: {
        name: "responseCode",
        type: "ResponseCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  SyncType: {
      type: "string",
      wsdlDefinition: {
        name: "SyncType",
        "xsd:attribute": [
          {
            name: "syncActionCode",
            type: "SyncActionCodeType",
            use: "optional",
            attribute: true
          },
          {
            name: "responseCode",
            type: "ResponseCodeType",
            use: "optional",
            attribute: true
          }
        ],
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    syncActionCode: {
      type: "TypeSyncActionCodeType",
      wsdlDefinition: {
        name: "syncActionCode",
        type: "SyncActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    responseCode: {
      type: "TypeResponseCodeType",
      wsdlDefinition: {
        name: "responseCode",
        type: "ResponseCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncType;
Modeler.register(TypeSyncType, "TypeSyncType");
