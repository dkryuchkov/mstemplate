var Modeler = require("../Modeler.js");
var className = 'ElementServiceRequestIdentification';

var ElementServiceRequestIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceRequestIdentification: {
      type: "TypeServiceRequestIdentificationType",
      wsdlDefinition: {
        name: "ServiceRequestIdentification",
        type: "ServiceRequestIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Request"
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
	  ServiceRequestIdentification: {
      type: "TypeServiceRequestIdentificationType",
      wsdlDefinition: {
        name: "ServiceRequestIdentification",
        type: "ServiceRequestIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Request"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceRequestIdentification;
Modeler.register(ElementServiceRequestIdentification, "ElementServiceRequestIdentification");
