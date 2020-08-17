var Modeler = require("../Modeler.js");
var className = 'TypeCustomApplicationAreaType';

var TypeCustomApplicationAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomApplicationAreaType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomApplicationAreaType",
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
	  CustomApplicationAreaType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomApplicationAreaType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomApplicationAreaType;
Modeler.register(TypeCustomApplicationAreaType, "TypeCustomApplicationAreaType");
