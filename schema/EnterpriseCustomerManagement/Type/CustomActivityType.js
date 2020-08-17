var Modeler = require("../Modeler.js");
var className = 'TypeCustomActivityType';

var TypeCustomActivityType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomActivityType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomActivityType",
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
	  CustomActivityType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomActivityType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomActivityType;
Modeler.register(TypeCustomActivityType, "TypeCustomActivityType");
