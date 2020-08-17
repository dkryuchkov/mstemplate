var Modeler = require("../Modeler.js");
var className = 'TypeBillOfLadingReferenceType';

var TypeBillOfLadingReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfLadingIdentification: {
      type: "TypeBillOfLadingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfLadingIdentification",
        type: "BillOfLadingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillOfLadingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillOfLadingReferenceType",
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
	  BillOfLadingIdentification: {
      type: "TypeBillOfLadingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfLadingIdentification",
        type: "BillOfLadingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillOfLadingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillOfLadingReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBillOfLadingReferenceType;
Modeler.register(TypeBillOfLadingReferenceType, "TypeBillOfLadingReferenceType");
