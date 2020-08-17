var Modeler = require("../Modeler.js");
var className = 'ElementDemandDocumentLineReference';

var ElementDemandDocumentLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DemandDocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "DemandDocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a demand document line"
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
	  DemandDocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "DemandDocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a demand document line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDemandDocumentLineReference;
Modeler.register(ElementDemandDocumentLineReference, "ElementDemandDocumentLineReference");
