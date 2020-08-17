var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayerType';

var TypeCustomPayerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayerType",
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
	  CustomPayerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayerType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayerType;
Modeler.register(TypeCustomPayerType, "TypeCustomPayerType");
