var Modeler = require("../Modeler.js");
var className = 'ElementSalespersonPartyReference';

var ElementSalespersonPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalespersonPartyReference: {
      type: "TypeSalespersonPartyReferenceType",
      wsdlDefinition: {
        name: "SalespersonPartyReference",
        type: "SalespersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A person that sells goods or services"
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
	  SalespersonPartyReference: {
      type: "TypeSalespersonPartyReferenceType",
      wsdlDefinition: {
        name: "SalespersonPartyReference",
        type: "SalespersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A person that sells goods or services"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalespersonPartyReference;
Modeler.register(ElementSalespersonPartyReference, "ElementSalespersonPartyReference");
