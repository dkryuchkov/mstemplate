var Modeler = require("../Modeler.js");
var className = 'TypeCustomOfferReferenceType';

var TypeCustomOfferReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOfferReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOfferReferenceType",
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
	  CustomOfferReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOfferReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOfferReferenceType;
Modeler.register(TypeCustomOfferReferenceType, "TypeCustomOfferReferenceType");
