var Modeler = require("../Modeler.js");
var className = 'ElementPayFromBusinessUnitReference';

var ElementPayFromBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayFromBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "PayFromBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a PayFromBusinessUnit. A PayFrom BusinessUnit is the business unit from where payments will be made for a transaction."
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
	  PayFromBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "PayFromBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a PayFromBusinessUnit. A PayFrom BusinessUnit is the business unit from where payments will be made for a transaction."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayFromBusinessUnitReference;
Modeler.register(ElementPayFromBusinessUnitReference, "ElementPayFromBusinessUnitReference");
