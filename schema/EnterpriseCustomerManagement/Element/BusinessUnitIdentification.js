var Modeler = require("../Modeler.js");
var className = 'ElementBusinessUnitIdentification';

var ElementBusinessUnitIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessUnitIdentification: {
      type: "TypeBusinessUnitIdentificationType",
      wsdlDefinition: {
        name: "BusinessUnitIdentification",
        type: "BusinessUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Business Unit"
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
	  BusinessUnitIdentification: {
      type: "TypeBusinessUnitIdentificationType",
      wsdlDefinition: {
        name: "BusinessUnitIdentification",
        type: "BusinessUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Business Unit"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBusinessUnitIdentification;
Modeler.register(ElementBusinessUnitIdentification, "ElementBusinessUnitIdentification");
