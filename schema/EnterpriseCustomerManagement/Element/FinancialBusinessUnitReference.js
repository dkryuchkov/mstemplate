var Modeler = require("../Modeler.js");
var className = 'ElementFinancialBusinessUnitReference';

var ElementFinancialBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialBusinessUnitReference: {
      type: "TypeFinancialBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "FinancialBusinessUnitReference",
        type: "FinancialBusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a business unit that provides financial function."
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
	  FinancialBusinessUnitReference: {
      type: "TypeFinancialBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "FinancialBusinessUnitReference",
        type: "FinancialBusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a business unit that provides financial function."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialBusinessUnitReference;
Modeler.register(ElementFinancialBusinessUnitReference, "ElementFinancialBusinessUnitReference");
