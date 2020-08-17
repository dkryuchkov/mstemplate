var Modeler = require("../Modeler.js");
var className = 'ElementRequisitionIdentification';

var ElementRequisitionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequisitionIdentification: {
      type: "TypeRequisitionIdentificationType",
      wsdlDefinition: {
        name: "RequisitionIdentification",
        type: "RequisitionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Requisition"
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
	  RequisitionIdentification: {
      type: "TypeRequisitionIdentificationType",
      wsdlDefinition: {
        name: "RequisitionIdentification",
        type: "RequisitionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Requisition"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequisitionIdentification;
Modeler.register(ElementRequisitionIdentification, "ElementRequisitionIdentification");
