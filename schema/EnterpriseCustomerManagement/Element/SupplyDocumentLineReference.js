var Modeler = require("../Modeler.js");
var className = 'ElementSupplyDocumentLineReference';

var ElementSupplyDocumentLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplyDocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "SupplyDocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a supply document line"
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
	  SupplyDocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "SupplyDocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a supply document line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplyDocumentLineReference;
Modeler.register(ElementSupplyDocumentLineReference, "ElementSupplyDocumentLineReference");
