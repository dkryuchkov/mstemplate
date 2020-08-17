var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaydexNormType';

var TypeCustomPaydexNormType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaydexNormType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaydexNormType",
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
	  CustomPaydexNormType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaydexNormType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaydexNormType;
Modeler.register(TypeCustomPaydexNormType, "TypeCustomPaydexNormType");
