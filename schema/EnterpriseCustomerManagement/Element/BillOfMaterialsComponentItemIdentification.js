var Modeler = require("../Modeler.js");
var className = 'ElementBillOfMaterialsComponentItemIdentification';

var ElementBillOfMaterialsComponentItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfMaterialsComponentItemIdentification: {
      type: "TypeBillOfMaterialsComponentItemIdentificationType",
      wsdlDefinition: {
        name: "BillOfMaterialsComponentItemIdentification",
        type: "BillOfMaterialsComponentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Component Item within a Bill Of Materials"
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
	  BillOfMaterialsComponentItemIdentification: {
      type: "TypeBillOfMaterialsComponentItemIdentificationType",
      wsdlDefinition: {
        name: "BillOfMaterialsComponentItemIdentification",
        type: "BillOfMaterialsComponentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Component Item within a Bill Of Materials"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillOfMaterialsComponentItemIdentification;
Modeler.register(ElementBillOfMaterialsComponentItemIdentification, "ElementBillOfMaterialsComponentItemIdentification");
