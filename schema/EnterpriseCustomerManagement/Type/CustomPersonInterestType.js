var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonInterestType';

var TypeCustomPersonInterestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonInterestType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonInterestType",
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
	  CustomPersonInterestType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonInterestType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonInterestType;
Modeler.register(TypeCustomPersonInterestType, "TypeCustomPersonInterestType");
