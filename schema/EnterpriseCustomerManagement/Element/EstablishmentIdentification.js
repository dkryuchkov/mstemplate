var Modeler = require("../Modeler.js");
var className = 'ElementEstablishmentIdentification';

var ElementEstablishmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EstablishmentIdentification: {
      type: "TypeEstablishmentIdentificationType",
      wsdlDefinition: {
        name: "EstablishmentIdentification",
        type: "EstablishmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Establishment. An establishment is a physical place of business defined primarily for the purpose of regulatory reporting in the human resource area. Establishment is typically associated with a Location, company and other reporting information. It may not be a single building but also an entire industrial or office complex. Establishments are used, for example, for Occupational Illness  and Injury Record keeping (OSHA 200) and Equal Employment Opportunity/Affirmative Action reporting in the United States, or Social Security and  business statistical reporting in France."
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
	  EstablishmentIdentification: {
      type: "TypeEstablishmentIdentificationType",
      wsdlDefinition: {
        name: "EstablishmentIdentification",
        type: "EstablishmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Establishment. An establishment is a physical place of business defined primarily for the purpose of regulatory reporting in the human resource area. Establishment is typically associated with a Location, company and other reporting information. It may not be a single building but also an entire industrial or office complex. Establishments are used, for example, for Occupational Illness  and Injury Record keeping (OSHA 200) and Equal Employment Opportunity/Affirmative Action reporting in the United States, or Social Security and  business statistical reporting in France."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEstablishmentIdentification;
Modeler.register(ElementEstablishmentIdentification, "ElementEstablishmentIdentification");
