var Modeler = require("../Modeler.js");
var className = 'TypeTalentProfileTypeReferenceType';

var TypeTalentProfileTypeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileTypeIdentification: {
      type: "TypeTalentProfileTypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileTypeIdentification",
        type: "TalentProfileTypeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileTypeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileTypeReferenceType",
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
	  TalentProfileTypeIdentification: {
      type: "TypeTalentProfileTypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TalentProfileTypeIdentification",
        type: "TalentProfileTypeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTalentProfileTypeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTalentProfileTypeReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTalentProfileTypeReferenceType;
Modeler.register(TypeTalentProfileTypeReferenceType, "TypeTalentProfileTypeReferenceType");
