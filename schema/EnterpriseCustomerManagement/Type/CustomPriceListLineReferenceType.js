var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriceListLineReferenceType';

var TypeCustomPriceListLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriceListLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceListLineReferenceType",
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
	  CustomPriceListLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceListLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriceListLineReferenceType;
Modeler.register(TypeCustomPriceListLineReferenceType, "TypeCustomPriceListLineReferenceType");
