var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentItemCatalogIdentification';

var ElementTalentProfileContentItemCatalogIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentItemCatalogIdentification: {
      type: "TypeTalentProfileContentItemCatalogIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentItemCatalogIdentification",
        type: "TalentProfileContentItemCatalogIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Item Catalog object"
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
	  TalentProfileContentItemCatalogIdentification: {
      type: "TypeTalentProfileContentItemCatalogIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentItemCatalogIdentification",
        type: "TalentProfileContentItemCatalogIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Item Catalog object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentItemCatalogIdentification;
Modeler.register(ElementTalentProfileContentItemCatalogIdentification, "ElementTalentProfileContentItemCatalogIdentification");
