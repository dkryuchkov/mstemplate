var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemInstanceType';

var TypeCustomItemInstanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemInstanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceType",
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
	  CustomItemInstanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemInstanceType;
Modeler.register(TypeCustomItemInstanceType, "TypeCustomItemInstanceType");
