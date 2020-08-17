var Modeler = require("../Modeler.js");
var className = 'TypeLineOfCreditReferenceType';

var TypeLineOfCreditReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LineOfCreditIdentification: {
      type: "TypeLineOfCreditIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LineOfCreditIdentification",
        type: "LineOfCreditIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLineOfCreditReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLineOfCreditReferenceType",
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
	  LineOfCreditIdentification: {
      type: "TypeLineOfCreditIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LineOfCreditIdentification",
        type: "LineOfCreditIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLineOfCreditReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLineOfCreditReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLineOfCreditReferenceType;
Modeler.register(TypeLineOfCreditReferenceType, "TypeLineOfCreditReferenceType");
