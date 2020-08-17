var Modeler = require("../Modeler.js");
var className = 'TypeFestivalAdvancePayProgramReferenceType';

var TypeFestivalAdvancePayProgramReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FestivalAdvancePayProgramIdentification: {
      type: "TypeFestivalAdvancePayProgramIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FestivalAdvancePayProgramIdentification",
        type: "FestivalAdvancePayProgramIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFestivalAdvancePayProgramReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFestivalAdvancePayProgramReferenceType",
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
	  FestivalAdvancePayProgramIdentification: {
      type: "TypeFestivalAdvancePayProgramIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FestivalAdvancePayProgramIdentification",
        type: "FestivalAdvancePayProgramIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFestivalAdvancePayProgramReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFestivalAdvancePayProgramReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFestivalAdvancePayProgramReferenceType;
Modeler.register(TypeFestivalAdvancePayProgramReferenceType, "TypeFestivalAdvancePayProgramReferenceType");
