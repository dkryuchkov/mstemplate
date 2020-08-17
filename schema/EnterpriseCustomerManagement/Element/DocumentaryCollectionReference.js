var Modeler = require("../Modeler.js");
var className = 'ElementDocumentaryCollectionReference';

var ElementDocumentaryCollectionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentaryCollectionReference: {
      type: "TypeDocumentaryCollectionReferenceType",
      wsdlDefinition: {
        name: "DocumentaryCollectionReference",
        type: "DocumentaryCollectionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Documentary Collection object. It is an international trade procedure in which a bank in the importer's country acts on behalf of an exporter for collecting and remitting payment for a shipment. Unlike in documentary credit the issuing bank make no guaranties.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  DocumentaryCollectionReference: {
      type: "TypeDocumentaryCollectionReferenceType",
      wsdlDefinition: {
        name: "DocumentaryCollectionReference",
        type: "DocumentaryCollectionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Documentary Collection object. It is an international trade procedure in which a bank in the importer's country acts on behalf of an exporter for collecting and remitting payment for a shipment. Unlike in documentary credit the issuing bank make no guaranties.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDocumentaryCollectionReference;
Modeler.register(ElementDocumentaryCollectionReference, "ElementDocumentaryCollectionReference");
