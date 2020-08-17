var Modeler = require("../Modeler.js");
var className = 'TypeRequisitionReferenceType';

var TypeRequisitionReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomRequisitionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequisitionReferenceType",
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
    Custom: {
      type: "TypeCustomRequisitionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequisitionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRequisitionReferenceType;
Modeler.register(TypeRequisitionReferenceType, "TypeRequisitionReferenceType");
