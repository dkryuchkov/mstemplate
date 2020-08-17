var Modeler = require("../Modeler.js");
var className = 'ElementPersonNameUsage';

var ElementPersonNameUsage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonNameUsage: {
      type: "TypePersonNameUsageType",
      wsdlDefinition: {
        name: "PersonNameUsage",
        type: "PersonNameUsageType",
        "xsd:annotation": {
          "xsd:documentation": "This captures the usage information of a person name."
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
	  PersonNameUsage: {
      type: "TypePersonNameUsageType",
      wsdlDefinition: {
        name: "PersonNameUsage",
        type: "PersonNameUsageType",
        "xsd:annotation": {
          "xsd:documentation": "This captures the usage information of a person name."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonNameUsage;
Modeler.register(ElementPersonNameUsage, "ElementPersonNameUsage");
