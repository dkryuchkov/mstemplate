var Modeler = require("../Modeler.js");
var className = 'TypeCustomBalanceSummaryReferenceType';

var TypeCustomBalanceSummaryReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBalanceSummaryReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBalanceSummaryReferenceType",
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
	  CustomBalanceSummaryReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBalanceSummaryReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBalanceSummaryReferenceType;
Modeler.register(TypeCustomBalanceSummaryReferenceType, "TypeCustomBalanceSummaryReferenceType");
