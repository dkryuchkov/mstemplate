var Modeler = require("../Modeler.js");
var className = 'ElementValidateResponse';

var ElementValidateResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValidateResponse: {
      type: "TypeValidateResponseType",
      wsdlDefinition: {
        name: "ValidateResponse",
        type: "ValidateResponseType",
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
	  ValidateResponse: {
      type: "TypeValidateResponseType",
      wsdlDefinition: {
        name: "ValidateResponse",
        type: "ValidateResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementValidateResponse;
Modeler.register(ElementValidateResponse, "ElementValidateResponse");
