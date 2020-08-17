var Modeler = require("../Modeler.js");
var className = 'ElementShipmentManifestDocumentReference';

var ElementShipmentManifestDocumentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentManifestDocumentReference: {
      type: "TypeDocumentReferenceType",
      wsdlDefinition: {
        name: "ShipmentManifestDocumentReference",
        type: "DocumentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Shipment Manifest Document"
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
	  ShipmentManifestDocumentReference: {
      type: "TypeDocumentReferenceType",
      wsdlDefinition: {
        name: "ShipmentManifestDocumentReference",
        type: "DocumentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Shipment Manifest Document"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentManifestDocumentReference;
Modeler.register(ElementShipmentManifestDocumentReference, "ElementShipmentManifestDocumentReference");
