var Modeler = require("../Modeler.js");
var className = 'ElementEstablishmentReference';

var ElementEstablishmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EstablishmentReference: {
      type: "TypeEstablishmentReferenceType",
      wsdlDefinition: {
        name: "EstablishmentReference",
        type: "EstablishmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An establishment is a physical place of business defined primarily for the purpose of regulatory reporting in the human resource area. Establishment is typically associated with a Location, company and other reporting information. It may not be a single building but also an entire industrial or office complex. Establishments are used, for example, for Occupational Illness  and Injury Record keeping (OSHA 200) and Equal Employment Opportunity/Affirmative Action reporting in the United States, or Social Security and  business statistical reporting in France."
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
	  EstablishmentReference: {
      type: "TypeEstablishmentReferenceType",
      wsdlDefinition: {
        name: "EstablishmentReference",
        type: "EstablishmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An establishment is a physical place of business defined primarily for the purpose of regulatory reporting in the human resource area. Establishment is typically associated with a Location, company and other reporting information. It may not be a single building but also an entire industrial or office complex. Establishments are used, for example, for Occupational Illness  and Injury Record keeping (OSHA 200) and Equal Employment Opportunity/Affirmative Action reporting in the United States, or Social Security and  business statistical reporting in France."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEstablishmentReference;
Modeler.register(ElementEstablishmentReference, "ElementEstablishmentReference");
