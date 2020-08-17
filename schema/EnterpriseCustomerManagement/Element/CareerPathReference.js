var Modeler = require("../Modeler.js");
var className = 'ElementCareerPathReference';

var ElementCareerPathReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CareerPathReference: {
      type: "TypeCareerPathReferenceType",
      wsdlDefinition: {
        name: "CareerPathReference",
        type: "CareerPathReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Career Path. Career Path is a planned, logical progression of jobs within one or more professions throughout working life."
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
	  CareerPathReference: {
      type: "TypeCareerPathReferenceType",
      wsdlDefinition: {
        name: "CareerPathReference",
        type: "CareerPathReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Career Path. Career Path is a planned, logical progression of jobs within one or more professions throughout working life."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCareerPathReference;
Modeler.register(ElementCareerPathReference, "ElementCareerPathReference");
