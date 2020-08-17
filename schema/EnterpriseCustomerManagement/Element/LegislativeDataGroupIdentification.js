var Modeler = require("../Modeler.js");
var className = 'ElementLegislativeDataGroupIdentification';

var ElementLegislativeDataGroupIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LegislativeDataGroupIdentification: {
      type: "TypeLegislativeDataGroupIdentificationType",
      wsdlDefinition: {
        name: "LegislativeDataGroupIdentification",
        type: "LegislativeDataGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Legislative Data Group object"
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
	  LegislativeDataGroupIdentification: {
      type: "TypeLegislativeDataGroupIdentificationType",
      wsdlDefinition: {
        name: "LegislativeDataGroupIdentification",
        type: "LegislativeDataGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Legislative Data Group object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLegislativeDataGroupIdentification;
Modeler.register(ElementLegislativeDataGroupIdentification, "ElementLegislativeDataGroupIdentification");
