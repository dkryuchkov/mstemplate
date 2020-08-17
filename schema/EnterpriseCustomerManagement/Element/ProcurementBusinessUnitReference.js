var Modeler = require("../Modeler.js");
var className = 'ElementProcurementBusinessUnitReference';

var ElementProcurementBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcurementBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "ProcurementBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a procurement business unit within an enterprise. Typical role of the business unit is dealing purchase order and purchase order agreement (contract)"
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
	  ProcurementBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "ProcurementBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a procurement business unit within an enterprise. Typical role of the business unit is dealing purchase order and purchase order agreement (contract)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcurementBusinessUnitReference;
Modeler.register(ElementProcurementBusinessUnitReference, "ElementProcurementBusinessUnitReference");
