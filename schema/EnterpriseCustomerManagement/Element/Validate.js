var Modeler = require("../Modeler.js");
var className = 'ElementValidate';

var ElementValidate = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Validate: {
      type: "TypeValidateType",
      wsdlDefinition: {
        name: "Validate",
        type: "ValidateType",
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
	  Validate: {
      type: "TypeValidateType",
      wsdlDefinition: {
        name: "Validate",
        type: "ValidateType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementValidate;
Modeler.register(ElementValidate, "ElementValidate");
