var Modeler = require("../Modeler.js");
var className = 'ElementTaxLocationReference';

var ElementTaxLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TaxLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "TaxLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a location that \nis the basis for taxation"
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
	  TaxLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "TaxLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a location that \nis the basis for taxation"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTaxLocationReference;
Modeler.register(ElementTaxLocationReference, "ElementTaxLocationReference");
