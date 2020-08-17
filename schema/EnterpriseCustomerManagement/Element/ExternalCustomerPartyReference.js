var Modeler = require("../Modeler.js");
var className = 'ElementExternalCustomerPartyReference';

var ElementExternalCustomerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExternalCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "ExternalCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Captures information about an external customer (ie. payor who \nis not a customer)."
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
	  ExternalCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "ExternalCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Captures information about an external customer (ie. payor who \nis not a customer)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementExternalCustomerPartyReference;
Modeler.register(ElementExternalCustomerPartyReference, "ElementExternalCustomerPartyReference");
