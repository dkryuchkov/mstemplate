var Modeler = require("../Modeler.js");
var className = 'TypeBillOfMaterialsComponentItemReferenceType';

var TypeBillOfMaterialsComponentItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfMaterialsIdentification: {
      type: "TypeBillOfMaterialsIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfMaterialsIdentification",
        type: "BillOfMaterialsIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillOfMaterialsComponentItemIdentification: {
      type: "TypeBillOfMaterialsComponentItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfMaterialsComponentItemIdentification",
        type: "BillOfMaterialsComponentItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillOfMaterialsComponentItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillOfMaterialsComponentItemReferenceType",
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
	  BillOfMaterialsIdentification: {
      type: "TypeBillOfMaterialsIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfMaterialsIdentification",
        type: "BillOfMaterialsIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillOfMaterialsComponentItemIdentification: {
      type: "TypeBillOfMaterialsComponentItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfMaterialsComponentItemIdentification",
        type: "BillOfMaterialsComponentItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillOfMaterialsComponentItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillOfMaterialsComponentItemReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBillOfMaterialsComponentItemReferenceType;
Modeler.register(TypeBillOfMaterialsComponentItemReferenceType, "TypeBillOfMaterialsComponentItemReferenceType");
