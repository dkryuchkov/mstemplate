var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationCreditRating';

var ElementOrganizationCreditRating = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationCreditRating: {
      type: "TypeOrganizationCreditRatingType",
      wsdlDefinition: {
        name: "OrganizationCreditRating",
        type: "OrganizationCreditRatingType",
        "xsd:annotation": {
          "xsd:documentation": "Credit ratings of an organization"
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
	  OrganizationCreditRating: {
      type: "TypeOrganizationCreditRatingType",
      wsdlDefinition: {
        name: "OrganizationCreditRating",
        type: "OrganizationCreditRatingType",
        "xsd:annotation": {
          "xsd:documentation": "Credit ratings of an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationCreditRating;
Modeler.register(ElementOrganizationCreditRating, "ElementOrganizationCreditRating");
