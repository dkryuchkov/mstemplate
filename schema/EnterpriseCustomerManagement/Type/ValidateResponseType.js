var Modeler = require("../Modeler.js");
var className = 'TypeValidateResponseType';

var TypeValidateResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValidateResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "ValidateResponseType",
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
	  ValidateResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "ValidateResponseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeValidateResponseType;
Modeler.register(TypeValidateResponseType, "TypeValidateResponseType");
