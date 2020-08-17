var Modeler = require("../Modeler.js");
var className = 'ElementBusinessUnitFunctionIdentification';

var ElementBusinessUnitFunctionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessUnitFunctionIdentification: {
      type: "TypeBusinessUnitFunctionIdentificationType",
      wsdlDefinition: {
        name: "BusinessUnitFunctionIdentification",
        type: "BusinessUnitFunctionIdentificationType",
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
	  BusinessUnitFunctionIdentification: {
      type: "TypeBusinessUnitFunctionIdentificationType",
      wsdlDefinition: {
        name: "BusinessUnitFunctionIdentification",
        type: "BusinessUnitFunctionIdentificationType",
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

module.exports = ElementBusinessUnitFunctionIdentification;
Modeler.register(ElementBusinessUnitFunctionIdentification, "ElementBusinessUnitFunctionIdentification");
