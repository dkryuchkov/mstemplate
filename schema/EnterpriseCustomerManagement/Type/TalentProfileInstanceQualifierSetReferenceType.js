var Modeler = require("../Modeler.js");
var className = 'TypeTalentProfileInstanceQualifierSetReferenceType';

var TypeTalentProfileInstanceQualifierSetReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomTalentProfileInstanceQualifierSetReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileInstanceQualifierSetReferenceType",
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
    Custom: {
      type: "TypeCustomTalentProfileInstanceQualifierSetReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileInstanceQualifierSetReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTalentProfileInstanceQualifierSetReferenceType;
Modeler.register(TypeTalentProfileInstanceQualifierSetReferenceType, "TypeTalentProfileInstanceQualifierSetReferenceType");
