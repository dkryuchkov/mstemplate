var Modeler = require("../Modeler.js");
var className = 'ElementWIPOperationResourceIdentification';

var ElementWIPOperationResourceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPOperationResourceIdentification: {
      type: "TypeWIPOperationResourceIdentificationType",
      wsdlDefinition: {
        name: "WIPOperationResourceIdentification",
        type: "WIPOperationResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a WIP Operation Resource"
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
	  WIPOperationResourceIdentification: {
      type: "TypeWIPOperationResourceIdentificationType",
      wsdlDefinition: {
        name: "WIPOperationResourceIdentification",
        type: "WIPOperationResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a WIP Operation Resource"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPOperationResourceIdentification;
Modeler.register(ElementWIPOperationResourceIdentification, "ElementWIPOperationResourceIdentification");
