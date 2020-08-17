var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalesPersonPartyReferenceType';

var TypeCustomSalesPersonPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalesPersonPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesPersonPartyReferenceType",
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
	  CustomSalesPersonPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesPersonPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalesPersonPartyReferenceType;
Modeler.register(TypeCustomSalesPersonPartyReferenceType, "TypeCustomSalesPersonPartyReferenceType");
