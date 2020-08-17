var Modeler = require("../Modeler.js");
var className = 'TypeTalentProfileReferenceType';

var TypeTalentProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileIdentification: {
      type: "TypeTalentProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileIdentification",
        type: "TalentProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileReferenceType",
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
	  TalentProfileIdentification: {
      type: "TypeTalentProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileIdentification",
        type: "TalentProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTalentProfileReferenceType;
Modeler.register(TypeTalentProfileReferenceType, "TypeTalentProfileReferenceType");
