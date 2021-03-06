var Modeler = require("../Modeler.js");
var className = 'TypeCustomBillFromPartyReferenceType';

var TypeCustomBillFromPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBillFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillFromPartyReferenceType",
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
	  CustomBillFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillFromPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBillFromPartyReferenceType;
Modeler.register(TypeCustomBillFromPartyReferenceType, "TypeCustomBillFromPartyReferenceType");
