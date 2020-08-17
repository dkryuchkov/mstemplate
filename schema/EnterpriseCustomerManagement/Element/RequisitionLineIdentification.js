var Modeler = require("../Modeler.js");
var className = 'ElementRequisitionLineIdentification';

var ElementRequisitionLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        name: "RequisitionLineIdentification",
        type: "RequisitionLineIdentificationType",
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
	  RequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        name: "RequisitionLineIdentification",
        type: "RequisitionLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequisitionLineIdentification;
Modeler.register(ElementRequisitionLineIdentification, "ElementRequisitionLineIdentification");
