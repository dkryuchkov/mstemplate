var Modeler = require("../Modeler.js");
var className = 'TypeTalentProfileInstanceQualifierReferenceType';

var TypeTalentProfileInstanceQualifierReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileInstanceQualifierSetIdentification: {
      type: "TypeTalentProfileInstanceQualifierSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileInstanceQualifierSetIdentification",
        type: "TalentProfileInstanceQualifierSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TalentProfileInstanceQualifierIdentification: {
      type: "TypeTalentProfileInstanceQualifierIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileInstanceQualifierIdentification",
        type: "TalentProfileInstanceQualifierIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileInstanceQualifierReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileInstanceQualifierReferenceType",
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
	  TalentProfileInstanceQualifierSetIdentification: {
      type: "TypeTalentProfileInstanceQualifierSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileInstanceQualifierSetIdentification",
        type: "TalentProfileInstanceQualifierSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TalentProfileInstanceQualifierIdentification: {
      type: "TypeTalentProfileInstanceQualifierIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileInstanceQualifierIdentification",
        type: "TalentProfileInstanceQualifierIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileInstanceQualifierReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileInstanceQualifierReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTalentProfileInstanceQualifierReferenceType;
Modeler.register(TypeTalentProfileInstanceQualifierReferenceType, "TypeTalentProfileInstanceQualifierReferenceType");
