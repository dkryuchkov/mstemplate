var Modeler = require("../Modeler.js");
var className = 'ElementParentCustomerPartyReference';

var ElementParentCustomerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "ParentCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the parent CustomerParty"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  ParentCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "ParentCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the parent CustomerParty"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentCustomerPartyReference;
Modeler.register(ElementParentCustomerPartyReference, "ElementParentCustomerPartyReference");
