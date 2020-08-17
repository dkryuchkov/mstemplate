var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriceListReferenceType';

var TypeCustomPriceListReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriceListReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceListReferenceType",
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
	  CustomPriceListReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceListReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriceListReferenceType;
Modeler.register(TypeCustomPriceListReferenceType, "TypeCustomPriceListReferenceType");
