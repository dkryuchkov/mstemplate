var Modeler = require("../Modeler.js");
var className = 'TypePriceListLineReferenceType';

var TypePriceListLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceListIdentification: {
      type: "TypePriceListIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriceListIdentification",
        type: "PriceListIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PriceListLineIdentification: {
      type: "TypePriceListLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriceListLineIdentification",
        type: "PriceListLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPriceListLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPriceListLineReferenceType",
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
	  PriceListIdentification: {
      type: "TypePriceListIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriceListIdentification",
        type: "PriceListIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PriceListLineIdentification: {
      type: "TypePriceListLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriceListLineIdentification",
        type: "PriceListLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPriceListLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPriceListLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePriceListLineReferenceType;
Modeler.register(TypePriceListLineReferenceType, "TypePriceListLineReferenceType");
