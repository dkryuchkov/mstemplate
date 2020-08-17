var Modeler = require("../Modeler.js");
var className = 'TypeCustomEFTType';

var TypeCustomEFTType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEFTType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEFTType",
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
	  CustomEFTType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEFTType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEFTType;
Modeler.register(TypeCustomEFTType, "TypeCustomEFTType");
