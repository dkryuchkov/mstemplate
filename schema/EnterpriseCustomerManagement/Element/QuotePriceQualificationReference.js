var Modeler = require("../Modeler.js");
var className = 'ElementQuotePriceQualificationReference';

var ElementQuotePriceQualificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuotePriceQualificationReference: {
      type: "TypeQuotePriceQualificationReferenceType",
      wsdlDefinition: {
        name: "QuotePriceQualificationReference",
        type: "QuotePriceQualificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Qualification Line within a quote"
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
	  QuotePriceQualificationReference: {
      type: "TypeQuotePriceQualificationReferenceType",
      wsdlDefinition: {
        name: "QuotePriceQualificationReference",
        type: "QuotePriceQualificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Qualification Line within a quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuotePriceQualificationReference;
Modeler.register(ElementQuotePriceQualificationReference, "ElementQuotePriceQualificationReference");
