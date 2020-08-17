var Modeler = require("../Modeler.js");
var className = 'TypeRequisitionLineReferenceType';

var TypeRequisitionLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequisitionIdentification: {
      type: "TypeRequisitionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionIdentification",
        type: "RequisitionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionLineIdentification",
        type: "RequisitionLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRequisitionLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequisitionLineReferenceType",
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
	  RequisitionIdentification: {
      type: "TypeRequisitionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionIdentification",
        type: "RequisitionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionLineIdentification",
        type: "RequisitionLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRequisitionLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequisitionLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRequisitionLineReferenceType;
Modeler.register(TypeRequisitionLineReferenceType, "TypeRequisitionLineReferenceType");
