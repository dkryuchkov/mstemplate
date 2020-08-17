var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonNameUsageType';

var TypeCustomPersonNameUsageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonNameUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonNameUsageType",
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
	  CustomPersonNameUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonNameUsageType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonNameUsageType;
Modeler.register(TypeCustomPersonNameUsageType, "TypeCustomPersonNameUsageType");
