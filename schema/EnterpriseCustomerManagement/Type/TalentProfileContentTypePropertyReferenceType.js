var Modeler = require("../Modeler.js");
var className = 'TypeTalentProfileContentTypePropertyReferenceType';

var TypeTalentProfileContentTypePropertyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentTypeIdentification: {
      type: "TypeTalentProfileContentTypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileContentTypeIdentification",
        type: "TalentProfileContentTypeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TalentProfileContentTypePropertyIdentification: {
      type: "TypeTalentProfileContentTypePropertyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileContentTypePropertyIdentification",
        type: "TalentProfileContentTypePropertyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileContentTypePropertyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileContentTypePropertyReferenceType",
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
	  TalentProfileContentTypeIdentification: {
      type: "TypeTalentProfileContentTypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileContentTypeIdentification",
        type: "TalentProfileContentTypeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TalentProfileContentTypePropertyIdentification: {
      type: "TypeTalentProfileContentTypePropertyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileContentTypePropertyIdentification",
        type: "TalentProfileContentTypePropertyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileContentTypePropertyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileContentTypePropertyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTalentProfileContentTypePropertyReferenceType;
Modeler.register(TypeTalentProfileContentTypePropertyReferenceType, "TypeTalentProfileContentTypePropertyReferenceType");
