var Modeler = require("../Modeler.js");
var className = 'TypeCustomBillToPartyReferenceType';

var TypeCustomBillToPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBillToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillToPartyReferenceType",
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
	  CustomBillToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillToPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBillToPartyReferenceType;
Modeler.register(TypeCustomBillToPartyReferenceType, "TypeCustomBillToPartyReferenceType");
