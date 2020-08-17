var Modeler = require("../Modeler.js");
var className = 'TypePriceListReferenceType';

var TypePriceListReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomPriceListReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPriceListReferenceType",
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
    Custom: {
      type: "TypeCustomPriceListReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPriceListReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePriceListReferenceType;
Modeler.register(TypePriceListReferenceType, "TypePriceListReferenceType");
