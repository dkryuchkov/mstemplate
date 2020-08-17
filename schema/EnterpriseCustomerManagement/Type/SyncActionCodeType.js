var Modeler = require("../Modeler.js");
var className = 'TypeSyncActionCodeType';

var TypeSyncActionCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncActionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "SyncActionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "CREATEUPDATE"
            },
            {
              value: "CREATEREPLACE"
            }
          ]
        },
        attribute: false,
        type: "xsd:string"
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
	  SyncActionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "SyncActionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "CREATEUPDATE"
            },
            {
              value: "CREATEREPLACE"
            }
          ]
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncActionCodeType;
Modeler.register(TypeSyncActionCodeType, "TypeSyncActionCodeType");
