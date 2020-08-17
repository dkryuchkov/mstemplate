var Modeler = require("../Modeler.js");
var className = 'ElementServiceRequestReference';

var ElementServiceRequestReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceRequestReference: {
      type: "TypeServiceRequestReferenceType",
      wsdlDefinition: {
        name: "ServiceRequestReference",
        type: "ServiceRequestReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Request"
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
	  ServiceRequestReference: {
      type: "TypeServiceRequestReferenceType",
      wsdlDefinition: {
        name: "ServiceRequestReference",
        type: "ServiceRequestReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Request"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceRequestReference;
Modeler.register(ElementServiceRequestReference, "ElementServiceRequestReference");
