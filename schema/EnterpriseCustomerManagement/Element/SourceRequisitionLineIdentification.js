var Modeler = require("../Modeler.js");
var className = 'ElementSourceRequisitionLineIdentification';

var ElementSourceRequisitionLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceRequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        name: "SourceRequisitionLineIdentification",
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
	  SourceRequisitionLineIdentification: {
      type: "TypeRequisitionLineIdentificationType",
      wsdlDefinition: {
        name: "SourceRequisitionLineIdentification",
        type: "RequisitionLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceRequisitionLineIdentification;
Modeler.register(ElementSourceRequisitionLineIdentification, "ElementSourceRequisitionLineIdentification");
