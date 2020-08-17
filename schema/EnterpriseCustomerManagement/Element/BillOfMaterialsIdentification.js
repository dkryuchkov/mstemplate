var Modeler = require("../Modeler.js");
var className = 'ElementBillOfMaterialsIdentification';

var ElementBillOfMaterialsIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfMaterialsIdentification: {
      type: "TypeBillOfMaterialsIdentificationType",
      wsdlDefinition: {
        name: "BillOfMaterialsIdentification",
        type: "BillOfMaterialsIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Bill Of Materials Identification"
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
	  BillOfMaterialsIdentification: {
      type: "TypeBillOfMaterialsIdentificationType",
      wsdlDefinition: {
        name: "BillOfMaterialsIdentification",
        type: "BillOfMaterialsIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Bill Of Materials Identification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillOfMaterialsIdentification;
Modeler.register(ElementBillOfMaterialsIdentification, "ElementBillOfMaterialsIdentification");
