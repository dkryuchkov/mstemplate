var Modeler = require("../Modeler.js");
var className = 'ElementPrimarySalespersonPartyReference';

var ElementPrimarySalespersonPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimarySalespersonPartyReference: {
      type: "TypePrimarySalespersonPartyReferenceType",
      wsdlDefinition: {
        name: "PrimarySalespersonPartyReference",
        type: "PrimarySalespersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the primary sales representative responsible for selling goods or services to the customer"
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
	  PrimarySalespersonPartyReference: {
      type: "TypePrimarySalespersonPartyReferenceType",
      wsdlDefinition: {
        name: "PrimarySalespersonPartyReference",
        type: "PrimarySalespersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the primary sales representative responsible for selling goods or services to the customer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimarySalespersonPartyReference;
Modeler.register(ElementPrimarySalespersonPartyReference, "ElementPrimarySalespersonPartyReference");
