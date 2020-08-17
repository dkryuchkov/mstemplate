var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerServiceRepresentativePersonPartyReferenceType';

var TypeCustomCustomerServiceRepresentativePersonPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerServiceRepresentativePersonPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerServiceRepresentativePersonPartyReferenceType",
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
	  CustomCustomerServiceRepresentativePersonPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerServiceRepresentativePersonPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerServiceRepresentativePersonPartyReferenceType;
Modeler.register(TypeCustomCustomerServiceRepresentativePersonPartyReferenceType, "TypeCustomCustomerServiceRepresentativePersonPartyReferenceType");
