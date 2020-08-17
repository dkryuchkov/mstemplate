var Modeler = require("../Modeler.js");
var className = 'ElementSupplierPartyReference';

var ElementSupplierPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        name: "SupplierPartyReference",
        type: "SupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A party (business or individual) that provides goods or services or both in return for payment; often used synonymously with vendor"
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
	  SupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        name: "SupplierPartyReference",
        type: "SupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A party (business or individual) that provides goods or services or both in return for payment; often used synonymously with vendor"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierPartyReference;
Modeler.register(ElementSupplierPartyReference, "ElementSupplierPartyReference");
