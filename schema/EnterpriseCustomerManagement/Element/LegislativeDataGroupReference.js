var Modeler = require("../Modeler.js");
var className = 'ElementLegislativeDataGroupReference';

var ElementLegislativeDataGroupReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LegislativeDataGroupReference: {
      type: "TypeLegislativeDataGroupReferenceType",
      wsdlDefinition: {
        name: "LegislativeDataGroupReference",
        type: "LegislativeDataGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Legislative Data Group object. It carries data that are common across a group of legislative codes such as currency."
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
	  LegislativeDataGroupReference: {
      type: "TypeLegislativeDataGroupReferenceType",
      wsdlDefinition: {
        name: "LegislativeDataGroupReference",
        type: "LegislativeDataGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Legislative Data Group object. It carries data that are common across a group of legislative codes such as currency."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLegislativeDataGroupReference;
Modeler.register(ElementLegislativeDataGroupReference, "ElementLegislativeDataGroupReference");
