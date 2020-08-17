var Modeler = require("../Modeler.js");
var className = 'TypeCustomBusinessUnitFunctionReferenceType';

var TypeCustomBusinessUnitFunctionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBusinessUnitFunctionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessUnitFunctionReferenceType",
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
	  CustomBusinessUnitFunctionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessUnitFunctionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBusinessUnitFunctionReferenceType;
Modeler.register(TypeCustomBusinessUnitFunctionReferenceType, "TypeCustomBusinessUnitFunctionReferenceType");
