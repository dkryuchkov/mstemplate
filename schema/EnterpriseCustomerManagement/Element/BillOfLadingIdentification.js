var Modeler = require("../Modeler.js");
var className = 'ElementBillOfLadingIdentification';

var ElementBillOfLadingIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfLadingIdentification: {
      type: "TypeBillOfLadingIdentificationType",
      wsdlDefinition: {
        name: "BillOfLadingIdentification",
        type: "BillOfLadingIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Bill Of Lading"
        },
        ns: "WL5G3N2",
        attribute: false
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
        name: "BillOfLadingIdentification",
        type: "BillOfLadingIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Bill Of Lading"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillOfLadingIdentification;
Modeler.register(ElementBillOfLadingIdentification, "ElementBillOfLadingIdentification");
