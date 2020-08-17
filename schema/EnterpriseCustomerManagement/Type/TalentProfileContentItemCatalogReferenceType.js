var Modeler = require("../Modeler.js");
var className = 'TypeTalentProfileContentItemCatalogReferenceType';

var TypeTalentProfileContentItemCatalogReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentItemCatalogIdentification: {
      type: "TypeTalentProfileContentItemCatalogIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileContentItemCatalogIdentification",
        type: "TalentProfileContentItemCatalogIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileContentItemCatalogReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileContentItemCatalogReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileContentItemCatalogIdentification",
        type: "TalentProfileContentItemCatalogIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileContentItemCatalogReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileContentItemCatalogReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTalentProfileContentItemCatalogReferenceType;
Modeler.register(TypeTalentProfileContentItemCatalogReferenceType, "TypeTalentProfileContentItemCatalogReferenceType");
