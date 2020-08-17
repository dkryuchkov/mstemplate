var Modeler = require("../Modeler.js");
var className = 'ElementBillOfMaterialsConfigurationStructureIdentification';

var ElementBillOfMaterialsConfigurationStructureIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfMaterialsConfigurationStructureIdentification: {
      type: "TypeBillOfMaterialsConfigurationStructureIdentificationType",
      wsdlDefinition: {
        name: "BillOfMaterialsConfigurationStructureIdentification",
        type: "BillOfMaterialsConfigurationStructureIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of a BillOfMaterialsConfigurationStructure in a BillOfMaterialsConfiguration object."
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
	  BillOfMaterialsConfigurationStructureIdentification: {
      type: "TypeBillOfMaterialsConfigurationStructureIdentificationType",
      wsdlDefinition: {
        name: "BillOfMaterialsConfigurationStructureIdentification",
        type: "BillOfMaterialsConfigurationStructureIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of a BillOfMaterialsConfigurationStructure in a BillOfMaterialsConfiguration object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillOfMaterialsConfigurationStructureIdentification;
Modeler.register(ElementBillOfMaterialsConfigurationStructureIdentification, "ElementBillOfMaterialsConfigurationStructureIdentification");
