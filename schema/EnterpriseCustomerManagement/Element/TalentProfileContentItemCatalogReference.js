var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentItemCatalogReference';

var ElementTalentProfileContentItemCatalogReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentItemCatalogReference: {
      type: "TypeTalentProfileContentItemCatalogReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentItemCatalogReference",
        type: "TalentProfileContentItemCatalogReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a catalog containing reusable Talent Profile Content Items"
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
	  TalentProfileContentItemCatalogReference: {
      type: "TypeTalentProfileContentItemCatalogReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentItemCatalogReference",
        type: "TalentProfileContentItemCatalogReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a catalog containing reusable Talent Profile Content Items"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentItemCatalogReference;
Modeler.register(ElementTalentProfileContentItemCatalogReference, "ElementTalentProfileContentItemCatalogReference");
