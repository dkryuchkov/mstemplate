var Modeler = require("../Modeler.js");
var className = 'TypeRequisitionDistributionReferenceType';

var TypeRequisitionDistributionReferenceType = function(json, parentObj) {
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
    RequisitionDistributionIdentification: {
      type: "TypeRequisitionDistributionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionDistributionIdentification",
        type: "RequisitionDistributionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRequisitionDistributionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequisitionDistributionReferenceType",
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
    RequisitionDistributionIdentification: {
      type: "TypeRequisitionDistributionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionDistributionIdentification",
        type: "RequisitionDistributionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRequisitionDistributionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequisitionDistributionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRequisitionDistributionReferenceType;
Modeler.register(TypeRequisitionDistributionReferenceType, "TypeRequisitionDistributionReferenceType");
