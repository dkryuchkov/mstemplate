var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriceType';

var TypeCustomPriceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceType",
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
	  CustomPriceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriceType;
Modeler.register(TypeCustomPriceType, "TypeCustomPriceType");
