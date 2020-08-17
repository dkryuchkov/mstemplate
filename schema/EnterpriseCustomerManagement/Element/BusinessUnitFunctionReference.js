var Modeler = require("../Modeler.js");
var className = 'ElementBusinessUnitFunctionReference';

var ElementBusinessUnitFunctionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessUnitFunctionReference: {
      type: "TypeBusinessUnitFunctionReferenceType",
      wsdlDefinition: {
        name: "BusinessUnitFunctionReference",
        type: "BusinessUnitFunctionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a function provided by a business unit. Example: Business Unit 001C may provide procurement business function for other business units."
        },
        ns: "WL5G3N2",
        attribute: false
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
	  BusinessUnitFunctionReference: {
      type: "TypeBusinessUnitFunctionReferenceType",
      wsdlDefinition: {
        name: "BusinessUnitFunctionReference",
        type: "BusinessUnitFunctionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a function provided by a business unit. Example: Business Unit 001C may provide procurement business function for other business units."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBusinessUnitFunctionReference;
Modeler.register(ElementBusinessUnitFunctionReference, "ElementBusinessUnitFunctionReference");
