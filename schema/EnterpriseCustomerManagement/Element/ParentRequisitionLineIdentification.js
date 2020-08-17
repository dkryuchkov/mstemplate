var Modeler = require("../Modeler.js");
var className = 'ElementParentRequisitionLineIdentification';

var ElementParentRequisitionLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentRequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        name: "ParentRequisitionLineIdentification",
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
	  ParentRequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        name: "ParentRequisitionLineIdentification",
        type: "RequisitionLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentRequisitionLineIdentification;
Modeler.register(ElementParentRequisitionLineIdentification, "ElementParentRequisitionLineIdentification");
