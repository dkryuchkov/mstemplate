var Modeler = require("../Modeler.js");
var className = 'TypeB2BDocumentTypeType';

var TypeB2BDocumentTypeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "B2B document type of the payload element.E.g. X12 850, OAG ProcessPurchaseOrder. The B2B document type is populated in the TypeCode element. The standard information e.g. X12, OAG is populated in the listAgencyID attribute"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Version: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Version",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Version of the B2B document. E.g. 4010 for X12 850, 9.0 for OAG ProcessPurchaseOrder"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomB2BDocumentTypeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomB2BDocumentTypeType",
        attribute: false,
        ns: "WL5G3N2"
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
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "B2B document type of the payload element.E.g. X12 850, OAG ProcessPurchaseOrder. The B2B document type is populated in the TypeCode element. The standard information e.g. X12, OAG is populated in the listAgencyID attribute"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Version: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Version",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Version of the B2B document. E.g. 4010 for X12 850, 9.0 for OAG ProcessPurchaseOrder"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomB2BDocumentTypeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomB2BDocumentTypeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeB2BDocumentTypeType;
Modeler.register(TypeB2BDocumentTypeType, "TypeB2BDocumentTypeType");
