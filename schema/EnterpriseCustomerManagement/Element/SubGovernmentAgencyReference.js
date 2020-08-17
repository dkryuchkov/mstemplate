var Modeler = require("../Modeler.js");
var className = 'ElementSubGovernmentAgencyReference';

var ElementSubGovernmentAgencyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SubGovernmentAgencyReference: {
      type: "TypeGovernmentAgencyReferenceType",
      wsdlDefinition: {
        name: "SubGovernmentAgencyReference",
        type: "GovernmentAgencyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Government Agency which is child of another agency"
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
	  SubGovernmentAgencyReference: {
      type: "TypeGovernmentAgencyReferenceType",
      wsdlDefinition: {
        name: "SubGovernmentAgencyReference",
        type: "GovernmentAgencyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Government Agency which is child of another agency"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSubGovernmentAgencyReference;
Modeler.register(ElementSubGovernmentAgencyReference, "ElementSubGovernmentAgencyReference");
