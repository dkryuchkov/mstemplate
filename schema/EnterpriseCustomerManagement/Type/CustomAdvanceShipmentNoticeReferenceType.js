var Modeler = require("../Modeler.js");
var className = 'TypeCustomAdvanceShipmentNoticeReferenceType';

var TypeCustomAdvanceShipmentNoticeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAdvanceShipmentNoticeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAdvanceShipmentNoticeReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomAdvanceShipmentNoticeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAdvanceShipmentNoticeReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAdvanceShipmentNoticeReferenceType;
Modeler.register(TypeCustomAdvanceShipmentNoticeReferenceType, "TypeCustomAdvanceShipmentNoticeReferenceType");
