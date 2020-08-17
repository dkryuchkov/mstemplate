var Modeler = require("../Modeler.js");
var className = 'ElementBatchParameter';

var ElementBatchParameter = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BatchParameter: {
      type: "TypeBatchParameterType",
      wsdlDefinition: {
        name: "BatchParameter",
        type: "BatchParameterType",
        "xsd:annotation": {
          "xsd:documentation": "This provides a generic structure for a strongly typed Name Value pair."
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
	  BatchParameter: {
      type: "TypeBatchParameterType",
      wsdlDefinition: {
        name: "BatchParameter",
        type: "BatchParameterType",
        "xsd:annotation": {
          "xsd:documentation": "This provides a generic structure for a strongly typed Name Value pair."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBatchParameter;
Modeler.register(ElementBatchParameter, "ElementBatchParameter");
